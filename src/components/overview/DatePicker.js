import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

const DatePicker = ({ range, setRange }) => {
    const handleDayClick = day => {
        const selectedRange = DateUtils.addDayToRange(day, range)
        setRange(selectedRange)
    }
    return (
        <Fragment>
            <DayPicker
                className="Selectable"
                selectedDays={[range.from, { from: range.from, to: range.to }]}
                modifiers={{ start: range.from, end: range.to }}
                onDayClick={handleDayClick}
                showOutsideDays
                firstDayOfWeek={1}
                enableOutsideDaysClick
                weekdaysShort={['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']}
            />
            <Helmet>
                <style>{`
                    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                        background-color: #f0f8ff !important;
                        color: #4a90e2;
                    }
                    .Selectable .DayPicker-Day {
                        border-radius: 0 !important;
                    }
                    .Selectable .DayPicker-Day--start {
                        border-top-left-radius: 50% !important;
                        border-bottom-left-radius: 50% !important;
                    }
                    .Selectable .DayPicker-Day--end {
                        border-top-right-radius: 50% !important;
                        border-bottom-right-radius: 50% !important;
                    }
                `}</style>
            </Helmet>
        </Fragment>
    )
}

export default DatePicker
