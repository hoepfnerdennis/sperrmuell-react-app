import React from 'react'
import { useFela } from 'react-fela'
import DayPicker from 'react-day-picker'
import mapIcon from '../../assets/map.png'
import 'react-day-picker/lib/style.css'

const container = ({ theme }) => ({
    maxWidth: theme.maxWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
})

const mapLink = ({ theme }) => ({
    boxShadow: theme.shadow,
    height: theme.space.l,
    width: theme.space.l,
    margin: theme.space.m,
    padding: theme.space.s,
})

const icon = ({ theme }) => ({
    height: theme.space.l,
    width: theme.space.l,
})

const DetailPage = ({ street }) => {
    const { css } = useFela()
    return (
        <div className={css(container)}>
            <h2>{street.name}</h2>
            <p>
                {`Sperrmüllabholung am: ${new Date(
                    street.time
                ).toLocaleDateString()}`}
            </p>
            <div className={css(mapLink)}>
                <a
                    href={`https://www.google.com/maps/search/${
                        street.name
                    }, Karlsruhe`}
                    target="_blanc"
                >
                    <img src={mapIcon} alt="mapIcon" className={css(icon)} />
                </a>
            </div>
            <DayPicker
                initialMonth={new Date(street.time)}
                selectedDays={new Date(street.time)}
                showOutsideDays
                firstDayOfWeek={1}
                canChangeMonth={false}
                weekdaysShort={['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']}
                locale="de"
            />
        </div>
    )
}

export default DetailPage
