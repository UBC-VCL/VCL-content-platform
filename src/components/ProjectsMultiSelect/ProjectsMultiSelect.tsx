import TextField from "@mui/material/TextField";
import React from "react";
import {Autocomplete} from "@mui/material";

const ProjectsMultiSelect = ({project, setProject}: {
    project: { name: string }[], setProject:
        React.Dispatch<React.SetStateAction<{ name: string }[]>>
}) => {

    //TODO replace dummy projects
    const dummyProjects = [{
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
        }, {
            name: "NCIS"
        }]

    return (
        <Autocomplete
            multiple
            style={{
                width: 317,
                paddingBottom: 30,
            }}
            filterSelectedOptions
            isOptionEqualToValue={(option, value) => option.name === value.name}
            onChange={(event, value) => setProject(value)}
            ChipProps={{
                style: {
                    backgroundColor: "#1E5487",
                    borderRadius: "5px",
                    color: "#fff",
                }
            }}
            options={project.length === 0 ? dummyProjects : []}
            getOptionLabel={option => option.name}
            renderInput={params => (
                <TextField
                    required
                    {...params}
                    style={{
                        borderRadius: "10px",
                    }}
                    variant="outlined"
                    label="Projects"
                />
            )}
        />
    )
}

export default ProjectsMultiSelect
