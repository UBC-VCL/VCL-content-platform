import React from "react";
import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const list = {
  'name': 'Project', 
  'options': ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Projects'],
};

function getStyles(name: string, nameArray: string[], theme: Theme) {
  return {
    fontWeight:
    nameArray.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ProjectsFilter = ({projectSelected, setProjectSelected}: {
    projectSelected: string[],
    setProjectSelected: React.Dispatch<React.SetStateAction<string[]>>
}) => {
        const theme = useTheme();
        const handleChange = (event: SelectChangeEvent<typeof projectSelected>) => {
          const {
            target: { value },
          } = event;
          setProjectSelected(
            typeof value === 'string' ? value.split(',') : value,
          );
        };

        return (
            <FormControl sx={{ m: 1, display: 'inline' }}>
              <div style={{ display: 'inline-block', color: '#7e7e7e', marginRight: '10px' }}>
                  {list.name}:
              </div>
              <div style={{display: 'inline-block'}}>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                variant="standard"
                disableUnderline
                multiple
                value={projectSelected}
                onChange={handleChange}
                MenuProps={MenuProps}
                sx={{ width: 120 }}
                >
                {list.options.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, projectSelected, theme)}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
                </div>
            </FormControl>
    )
}

export default ProjectsFilter
