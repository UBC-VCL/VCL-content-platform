import React from 'react'
import { useRef } from 'react'
import './DateRangePicker.css'
import { SearchFilter, dateTuple } from "@pages/Timeline/types";
import { date } from 'yup';

interface PropsOBJ {
    dateRange: [dateTuple?, dateTuple?],
    setDateRange: (array: [dateTuple, dateTuple]) => void,
    filterBy: SearchFilter,
    setFilter: (obj: SearchFilter) => void
}

const DateRangePicker = (props: PropsOBJ) => {

    const { dateRange, setDateRange, filterBy, setFilter } = props;

    const initialDate = useRef<HTMLInputElement>(null);
    const targetDate = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        setDateRange([
            ['initial', initialDate.current?.value? initialDate.current.value : ""],
            ['target', targetDate.current?.value? targetDate.current.value : ""]
        ])

        setFilter({...filterBy, date: [
            ['initial', initialDate.current?.value ? initialDate.current.value : ""],
            ['target', targetDate.current?.value ? targetDate.current.value : ""]
        ]})

        console.log(dateRange)
        console.log(filterBy)
    }

    return (
        <div className='date-range-div'>
            <div className='input-div'>
                <input type='date' id='initial-date-input' className='date-input' ref={initialDate} required />
                <div className='range-divider'>
                    <div className='range-divider-line'></div>
                    <p className='range-divider-text'>
                        to
                    </p>
                    <div className='range-divider-line'></div>
                </div>
                <input type='date' id='target-date-input' className='date-input' ref={targetDate} required />
                <div className='button-div'>
                    <div className='submit-button' onClick={handleChange}>
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
