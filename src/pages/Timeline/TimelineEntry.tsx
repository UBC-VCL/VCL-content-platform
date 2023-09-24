import {Button, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useState} from 'react';
import DateSelect from "@components/DateSelect/DateSelect";
import Box from "@mui/material/Box";
import {ROUTES} from "@statics";
import ProjectsMultiSelect from "@components/ProjectsMultiSelect/ProjectsMultiSelect";
import CategoriesMultiSelect from "@components/CategoriesMultiSelect/CategoriesMultiSelect";
import {useFormik} from "formik";
import {validationSchema} from "../../Validation/TimelineEntryValidation";

const TimelineEntry = () => {

    const [date, setDate] = useState<Date | null>(new Date())
    const [project, setProject] = useState<{name: string}[]>([])
    const [categories, setCategories] = useState<{name: string}[]>([]);

    const handleSubmit = (values: any) => {
        const {author, title, contributors} = values;
        if (project.length > 0 && categories.length > 0) {
            window.location.pathname = ROUTES.TIMELINE!;
        }
    }

    const formik: any = useFormik({
        initialValues: {
            author: "",
            title: "",
            contributors: "",
        },
        onSubmit: async (values) => {
            await handleSubmit(values);

        },
        validationSchema: validationSchema
    })

    return (
        <div className="form-container">
            <Box sx={{display: 'inline-flex', flexDirection: 'column',}} textAlign='center' component="form"
                 onSubmit={formik.handleSubmit}>
                    <Typography align="left" style={{fontWeight: 600}} variant="h5" paddingTop={5}>
                        Add Timeline Entry
                    </Typography>
                    <p>Fill in the blanks below to add a timeline entry</p>
                    <TextField
                        sx={{width: 317}} variant="standard"
                        name="author"
                        label="Author"
                        value={formik.values.author}
                        onChange={formik.handleChange}
                        error={formik.touched.author && Boolean(formik.errors.author)}
                        helperText={formik.touched.author && formik.errors.author}
                        required
                    />
                    <TextField
                        sx={{width: 317}} variant="standard"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        required
                    />
                    <TextField
                        sx={{width: 317}} variant="standard"
                        name="contributors"
                        label="Contributors"
                        value={formik.values.contributors}
                        onChange={formik.handleChange}
                        error={formik.touched.contributors && Boolean(formik.errors.contributors)}
                        helperText={formik.touched.contributors && formik.errors.contributors}
                        required
                    />
                <Typography align="left" sx={{paddingTop: 3, paddingBottom: 3, textDecoration: 'underline'}}>
                    Select a Date
                </Typography>
                <DateSelect date={date} setDate={setDate}/>
                <Typography align="left" sx={{paddingBottom: 3, paddingTop: 3}}>
                    Select a Project
                </Typography>
                <ProjectsMultiSelect project={project} setProject={setProject}/>

                <Typography align="left" sx={{paddingBottom: 3}}>
                    Select Applicable Categories
                </Typography>
                <CategoriesMultiSelect categories={categories} setCategories={setCategories}/>
                <div>
                    <Button
                        onClick={formik.handleSubmit}
                        variant="outlined" style={{
                        backgroundColor: "#1E5487",
                        color: "white",
                        width: 200,
                        marginTop: 50
                    }}>
                        Add Update
                    </Button>
                </div>
            </Box>
        </div>
    )
}
export default TimelineEntry
