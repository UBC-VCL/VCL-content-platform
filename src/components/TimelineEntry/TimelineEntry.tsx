import {Autocomplete, Button, Stack, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from "@components/DatePicker/DatePicker";
import Chip from "@mui/material/Chip";
import MultipleSelect from "@components/MultiSelect/MultiSelect";


const TimelineEntry = () => {
    const [selectedProject, setSelectedProject] = useState()
    const [selectedCategories, setSelectedCategories] = useState([]);



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
        }]

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



    return (
        <div>

            <Typography>
                Edit Timeline Entry
            </Typography>
            <Typography>
                Edit the blanks below to edit the timeline entry
            </Typography>
            <div>
                <TextField sx={{width: 317}} id="standard-basic" label="Author" variant="standard"/>
            </div>
            <div>
                <TextField sx={{width: 317}} id="standard-basic" label="Title" variant="standard"/>
            </div>
            <div>
                <TextField sx={{width: 317}} id="standard-basic" label="Contributors" variant="standard"/>
            </div>
            <DatePicker></DatePicker>
            <Typography>
                Select a Project
            </Typography>

            {/*{renderProjects()}*/}
            <Autocomplete
                // @ts-ignore
                onChange={(event, value) => setSelectedProject(value)}
                disablePortal
                id="project-select"
                options={projects}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Project" />}
            />

            <Typography>
                Select Applicable Categories
            </Typography>

            {/*<MultipleSelect></MultipleSelect>*/}
            <Autocomplete

                onChange={(event, value) => {
                    console.log(value)
                    // @ts-ignore
                    setSelectedCategories(value);
                }}
                multiple
                disablePortal
                id="tags-outlined"
                options={categories}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField {...params} label="Categories" placeholder="" />
                )}
            />


        </div>
    )
}

export default TimelineEntry
