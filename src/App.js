import React, { useState } from 'react'
import { FelaComponent } from 'react-fela'
import './App.css'
import streets from './data/data.json'
import StreetList from './components/list/StreetList'
import SearchField from './components/list/SearchField'

const App = () => {
    const [query, setQuery] = useState('')

    const styles = {
        container: {
            margin: '.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        selection: {
            display: 'flex',
        },
    }

    const filteredData =
        query.length > 1
            ? streets.filter(street =>
                  street.name.includes(query.toUpperCase())
              )
            : []

    return (
        <FelaComponent style={styles.container}>
            <FelaComponent style={styles.selection}>
                <SearchField
                    onChange={string => {
                        setQuery(string)
                    }}
                    query={query}
                />
            </FelaComponent>
            <StreetList streets={filteredData} />
        </FelaComponent>
    )
}

export default App
