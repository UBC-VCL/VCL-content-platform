import React from 'react'
import { useRef } from 'react'
import './DateRangePicker.css'
import { SearchFilter, dateTuple } from "@pages/Timeline/types";

interface PropsOBJ {
    dateRange: [dateTuple?, dateTuple?],
    setRange: (array:[dateTuple?, dateTuple?]) => void,
    filterBy: SearchFilter,
    setFilter: (obj: SearchFilter) => void
}

const DateRangePicker = (props:PropsOBJ) => {

    const { dateRange, setRange, filterBy, setFilter} = props;

    const handleChange = (tupleComp:string, date:string) => {
        
    }

    return (
        <div className='date-range-div'>
            <div className='input-div'>
                <input type='date' id='initial-date-input' className='date-input' />
                <div className='range-divider'>
                    <div className='range-divider-line'></div>
                    <p className='range-divider-text'>
                        to
                    </p>
                    <div className='range-divider-line'></div>
                </div>
                <input type='date' id='target-date-input' className='date-input' />
                <div className='button-div'>
                    <div className='submit-button'>
                        <p>
                            Submit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateRangePicker;
