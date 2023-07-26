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

        // This is here for the case where the target date is before the initial date, this will switch the two values before setting values
        if (initialDate.current?.value && targetDate.current?.value && (new Date(targetDate.current?.value) < new Date(initialDate.current?.value))) {
            const initialBeforeSwitch = initialDate.current.value
            const targetBeforeSwitch = targetDate.current.value

            initialDate.current.value = targetBeforeSwitch;
            targetDate.current.value = initialBeforeSwitch;
        }

        setDateRange([
            ['initial', initialDate.current?.value ? initialDate.current.value : ""],
            ['target', targetDate.current?.value ? targetDate.current.value : ""]
        ])

        setFilter({
            ...filterBy, date: [
                ['initial', initialDate.current?.value ? initialDate.current.value : ""],
                ['target', targetDate.current?.value ? targetDate.current.value : ""]
            ]
        })
    }

    return (
        <div className='date-range-div'>
            <div className='input-div'>
                <input type='date' id='initial-date-input' className='date-input' ref={initialDate}
                />
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
