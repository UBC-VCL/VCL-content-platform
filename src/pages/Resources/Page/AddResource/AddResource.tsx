import './AddResource.css';
import { IoCloseSharp } from "react-icons/io5";
import { useState, ChangeEvent, useMemo, useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useAppSelector } from '@redux/hooks';
import { selectAuth } from '@redux/slices/AuthRedux';
import { Button, MenuItem, TextField } from '@mui/material';
import { TEXT } from '@statics';
import { ResourceRequestBody } from '@entities/Resource';

const AddResource: React.FC<{ isVisible: boolean, setVisible: (bool: boolean) => void, resourceCategory: string, subcategories: string[] | undefined, 
    message: string, handleSubmit: (reqBody: ResourceRequestBody) => Promise<boolean> }> = ({ isVisible, setVisible, resourceCategory, subcategories, message, handleSubmit }) => {

    const { username } = useAppSelector(selectAuth);
    // Determines the color of the post-submission message, true == green, false == red
    const [submitSuccessful, setSubmitSuccessful] = useState<boolean>(false);
    
    const schema = useMemo(
        () =>
          yup.object({
            title: yup
                .string()
                .required(TEXT.RESOURCE_PAGE.TITLE_EMPTY_ERROR),
            description: yup
                .string(),
            category: yup.object().shape({
                main: yup
                    .string()
                    .required(),
                sub: yup
                    .string()
                    .required(TEXT.RESOURCE_PAGE.CATEGORY_EMPTY_ERROR),
            }).required(),
            author: yup
                .string()
                .required(TEXT.RESOURCE_PAGE.AUTHOR_EMPTY_ERROR),
            username: yup
                .string()
                .required(),
            resource_link: yup
                .string()
                .matches(
                    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/,
                    TEXT.RESOURCE_PAGE.INVALID_URL_LINK_ERROR
                )
                .required(TEXT.RESOURCE_PAGE.LINK_EMPTY_ERROR),
          }),
        []
      );
    
    const form = useFormik<ResourceRequestBody>({
        initialValues: {
            title: '',
            description: '',
            category: {
                main: resourceCategory,
                sub: subcategories ? '' : (new Date().getFullYear().toString()),
            },
            author: '',
            username: username,
            resource_link: '',
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            console.log("loading");
            const submitResults = await handleSubmit(values);
            if (submitResults) {
                form.resetForm();
                setSubmitSuccessful(submitResults);
            }
            console.log("submission complete");
        },
    });

    // updates username in form when user logs in
    useEffect(() => {
      form.values.username = username;
    }, [username])

    return (
        <div className='add-resource-content-container' style={{ display: `${isVisible ? '' : 'none'}` }}>
            <div className='add-resource-content'>
                <div className='add-resource-close-tab-container'>
                    <IoCloseSharp className='add-resource-close-tab-button' size={45}
                        onClick={() => {
                            setVisible(false);
                        }} />
                </div>
                <div className='add-resource-content-title-container'>
                    <h1>Add Resource</h1>
                </div>
                <form className='add-resource-input-containers' onSubmit={form.handleSubmit}>
                    <div className='add-resource-input add-resource-input-containers-child add-resource-title-input-container'>
                        <h2>Title</h2>
                        <TextField
                            name="title"
                            size='small'
                            variant='outlined'
                            value={form.values.title}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={Boolean(form.touched.title) && Boolean(form.errors.title)}
                            helperText={form.touched.title && form.errors.title}
                            fullWidth
                        />
                    </div>
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-description-input-container'>
                        <h2>Description</h2>
                        <TextField
                            name="description"
                            size='small'
                            variant='outlined'
                            value={form.values.description}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={Boolean(form.touched.description) && Boolean(form.errors.description)}
                            helperText={form.touched.description && form.errors.description}
                            fullWidth
                            multiline
                            minRows={4}
                            maxRows={4}
                        />
                    </div>
                    { subcategories && <div className='add-resource-input add-resource-input-containers-child add-resource-title-input-container'>
                        <h2>Category</h2>
                        <TextField
                            select
                            name="category.sub"
                            size='small'
                            variant='outlined'
                            defaultValue=''
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={Boolean(form.touched.category?.sub) && Boolean(form.errors.category?.sub)}
                            helperText={form.touched.category?.sub && form.errors.category?.sub}
                            fullWidth
                        >
                            {subcategories.map((cat, index) => (
                                <MenuItem key={index} value={cat}>{cat}</MenuItem>
                            ))}
                        </TextField>
                    </div>}
                    <div className='add-resource-input add-resource-input-containers-child add-resource-title-input-container'>
                        <h2>Author(s)</h2>
                        <TextField
                            name="author"
                            size='small'
                            variant='outlined'
                            value={form.values.author}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={Boolean(form.touched.author) && Boolean(form.errors.author)}
                            helperText={form.touched.author && form.errors.author}
                            fullWidth
                        />
                    </div>
                    <div className='add-resource-input add-resource-input-containers-child add-resource-title-input-container'>
                        <h2>Link to Resource</h2>
                        <TextField
                            name="resource_link"
                            size='small'
                            variant='outlined'
                            value={form.values.resource_link}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={Boolean(form.touched.resource_link) && Boolean(form.errors.resource_link)}
                            helperText={form.touched.resource_link && form.errors.resource_link}
                            fullWidth
                        />
                    </div>
                    <Button 
                        id='add-resource-submit-button' 
                        className='add-resource-input-containers-child'
                        variant='contained'
                        type='submit'
                        disableElevation
                        disableRipple
                    >
                        Submit
                    </Button>
                </form>
                {message && <p className="after-submit-message" style={{color: submitSuccessful ? 'green' : 'red'}}>{message}</p>}
            </div>
        </div>
    )
};

export default AddResource;