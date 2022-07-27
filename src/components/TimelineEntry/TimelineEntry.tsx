import {Button, Stack, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from 'react';
import 'react-day-picker/dist/style.css';
import DatePicker from "@components/DatePicker/DatePicker";
import './TimelineEntry.css';
import {Autocomplete} from "@material-ui/lab";
import Box from "@mui/material/Box";
import {ROUTES} from "@statics";
import {useNavigate} from "react-router-dom";


const TimelineEntry = () => {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [contributors, setContributors] = useState("");



    //TODO replace dummy projects
    const projects = [{
        name: "Correlation"
    },
        {
            name: "Nova"
        }, {
            name: "Perceptual Modes"
        }, {
            name: "IDEO"
        }, {
            name: "IT"
        }, {
            name: "Dormant"
        }]

    //TODO replace dummy categories
    const categories = [{ // dummy categories
        name: "Workshops",
        id: 1
    },
        {
            name: "Conditions",
            id: 2
        }, {
            name: "Hiring",
            id: 3
        }, {
            name: "Meetings",
            id: 4
        }, {
            name: "Guest Speaker",
            id: 5
        }, {
            name: "Resources",
            id: 6
        },
        ]

    // const handleClick = (id: number) => (event: any) => {
    //     const project = findProjectById(id);
    //     // @ts-ignore
    //     setSelectedProjects([... selectedProjects, project])
    //     console.log(selectedProjects)
    //
    // }
    //
    // const findProjectById = (id: any) => {
    //     for (const project of projects) {
    //         if (project.id === id) {
    //             return project;
    //         }
    //     }
    // }

    // const renderProjects = () => {
    //     return projects.map((project) => {
    //         const id = project.id
    //
    //         return (
    //             // @ts-ignore
    //             <Chip color={selectedProjects.includes(project) ? "primary" : "secondary"}
    //                   onClick={handleClick(id)} label={project.name}/>)
    //     })
    // }



    const handleSubmit = () => {
        console.log("submit")
        navigate(`/${ROUTES.TIMELINE}`)
    }




    return (

        <div className="form-container">
<Box sx={{ display: 'inline-flex', flexDirection: 'column', }}  textAlign='center' component="form" onSubmit={handleSubmit}>
    <div className="text">
        <Typography align="left" style={{ fontWeight: 600 }} variant="h5"  >
            Add Timeline Entry
        </Typography>
    <p>Fill in the blanks below to add a timeline entry</p>
    </div>

            <div>
                <TextField value={author} onChange={(event) => {
                    setAuthor(event.target.value)
                }} required sx={{width: 317}} id="standard-basic" label="Author" variant="standard"/>
            </div>
            <div>
                <TextField value={title} onChange={(event) => {
                    setTitle(event.target.value)}}
                           required sx={{width: 317}} id="standard-basic" label="Title" variant="standard"/>
            </div>
            <div>
                <TextField value={contributors} onChange={(event) => {
                    setContributors(event.target.value)
                }}
                           required sx={{width: 317}} id="standard-basic" label="Contributors" variant="standard"/>
            </div>
            <Typography align="left" sx={{paddingTop: 3,textDecoration: 'underline'}}>
                Select a Date
            </Typography>
            <DatePicker></DatePicker>
            <Typography align="left" sx={{paddingBottom: 3, paddingTop: 3}}>
                Select a Project
            </Typography>

            {/*{renderProjects()}*/}
            <Autocomplete
                multiple
                style={{
                    width: 317,
                    paddingBottom: 30,
                }}
                filterSelectedOptions
                getOptionSelected={(option, value) => option.name === value.name}
                // @ts-ignore
                onChange={(event, value) => setSelectedProject(value)}
                ChipProps={{
                    style: {
                        backgroundColor: "#1E5487",
                        borderRadius: "5px",
                        color: "#fff",
                    }
                }}
                id="tags-standard"
                options={selectedProject.length === 0 ? projects: []}
                getOptionLabel={option => option.name}
                renderInput={params => (
                    <TextField
                        required = {selectedProject.length === 0}
                        {...params}
                        style={{
                            borderRadius: "10px",
                        }}
                        variant="outlined"
                        label="Projects"
                        id="custom-css-outlined-input"
                    />
                )}
            />

            {/*<Autocomplete*/}
            {/*    // @ts-ignore*/}
            {/*    onChange={(event, value) => setSelectedProject(value)}*/}
            {/*    disablePortal*/}
            {/*    id="project-select"*/}
            {/*    options={projects}*/}
            {/*    getOptionLabel={(option) => option.name}*/}
            {/*    // @ts-ignore*/}
            {/*    sx={{width: 300, paddingLeft: 100, paddingBottom: 3}}*/}
            {/*    renderInput={(params) => <TextField {...params} label="Project"/>}*/}
            {/*/>*/}

            <Typography align="left" sx={{paddingBottom: 3}}>
                Select Applicable Categories
            </Typography>

            {/*<MultipleSelect></MultipleSelect>*/}
            <Autocomplete
                style={{
                    width: 317,
                }}
                multiple
                filterSelectedOptions
                getOptionSelected={(option, value) => option.name === value.name}
                // @ts-ignore
                onChange={(event, value) => setSelectedCategories(value)}
                ChipProps={{
                    style: {
                        backgroundColor: "#1E5487",
                        borderRadius: "5px",
                        color: "#fff",
                    }
                }}
                id="tags-standard"
                options={categories}
                getOptionLabel={option => option.name}
                renderInput={params => (
                    <TextField
                        {...params}
                        style={{
                            borderRadius: "10px",
                        }}
                        variant="outlined"
                        label="Categories"
                        required = {selectedCategories.length === 0}
                        id="custom-css-outlined-input"
                    />
                )}
            />
    <div>
    <Button
        type="submit"
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
