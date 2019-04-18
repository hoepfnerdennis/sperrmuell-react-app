import React, { Fragment } from 'react'
import { useFela } from 'react-fela'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

const datePickerInputStyle = ({ theme }) => ({
    fontSize: '1.5rem',
    height: '40px',
    textAlign: 'center',
    fontFamily: theme.fontFamily,
    borderRadius: '50px',
    border: 0,
    boxShadow: theme.shadow,
    outline: 'none',
    width: '300px',
    padding: `${theme.space.s} ${theme.space.xl}`,
})

const datePickerOverlayWrapperStyle = ({ theme }) => ({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: theme.space.l,
})

const titleStyle = ({ theme }) => ({
    marginBottom: theme.space.s,
})

const datePickerOverlayStyle = { position: 'relative' }

const isDate = date => date instanceof Date

const DatePicker = ({ date, setDate }) => {
    const { css } = useFela()
    return (
        <Fragment>
            <div className={css(titleStyle)}>Wähle ein Datum</div>
            <DayPickerInput
                value={date}
                classNames={{
                    container: 'DayPickerInput',
                    overlayWrapper: `DayPickerInput-OverlayWrapper ${css(
                        datePickerOverlayWrapperStyle
                    )}`,
                    overlay: `DayPickerInput-Overlay ${css(
                        datePickerOverlayStyle
                    )}`,
                }}
                formatDate={date => isDate(date) && date.toLocaleDateString()}
                onDayChange={selectedDay =>
                    isDate(selectedDay) && setDate(selectedDay)
                }
                keepFocus={false}
                component={props => (
                    <input
                        {...props}
                        type="button"
                        className={css(datePickerInputStyle)}
                    />
                )}
                dayPickerProps={{
                    showOutsideDays: true,
                    firstDayOfWeek: 1,
                    enableOutsideDaysClick: true,
                    weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                    selectedDays: date,
                }}
            />
        </Fragment>
    )
}

export default React.memo(DatePicker)
