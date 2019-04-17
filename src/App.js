import React, { useState } from 'react'
import { FelaComponent } from 'react-fela'
import DayPicker, { DateUtils } from 'react-day-picker'
import Helmet from 'react-helmet'
import './App.css'
import streets from './data/data.json'
import StreetList from './components/list/StreetList'
import SearchField from './components/list/SearchField'
import 'react-day-picker/lib/style.css'

const styles = {
    container: {
        margin: '.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    selection: {
        display: 'flex',
        flexDirection: 'column',
    },
}

const App = () => {
    const [query, setQuery] = useState('')
    const [range, setRange] = useState({
        from: new Date(),
        to: new Date(new Date().getTime() + 1209600000),
    })

    const handleDayClick = day => {
        const selectedRange = DateUtils.addDayToRange(day, range)
        setRange(selectedRange)
    }

    let filteredData = streets

    if (range.from && range.to) {
        filteredData = filteredData.filter(
            street =>
                street.time > range.from.getTime() &&
                street.time < range.to.getTime()
        )
    }
    if (query.length > 0) {
        filteredData = filteredData.filter(street =>
            street.name.includes(query.toUpperCase())
        )
    }

    return (
        <FelaComponent style={styles.container}>
            <FelaComponent style={styles.selection}>
                <SearchField
                    onChange={string => {
                        setQuery(string)
                    }}
                    query={query}
                />
                <DayPicker
                    className="Selectable"
                    selectedDays={[
                        range.from,
                        { from: range.from, to: range.to },
                    ]}
                    modifiers={{ start: range.from, end: range.to }}
                    onDayClick={handleDayClick}
                />
                {`Auswahl: ${range.from &&
                    range.from.toLocaleDateString()} bis ${range.to &&
                    range.to.toLocaleDateString()}`}
            </FelaComponent>
            <StreetList streets={filteredData} />
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
        </FelaComponent>
    )
}

export default App
