import React, { useState } from 'react'
import { FelaComponent } from 'react-fela'
import './App.css'
import data from './data/data.json'
import StreetList from './components/list/StreetList'
import Select from './components/list/Select'
import SearchField from './components/list/SearchField'

const App = () => {
    const [searchString, setSearchString] = useState('')
    const [searchAlphabet, setsearchAlphabet] = useState('A')
    const [isSearch, setIsSearch] = useState(true)

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
        selectedHighlight: {
            backgroundColor: 'lightgreen',
            padding: '1rem',
        },
        selectedNoHighlight: {
            padding: '1rem',
        },
    }

    return (
        <FelaComponent style={styles.container}>
            <FelaComponent style={styles.selection}>
                <FelaComponent
                    style={
                        isSearch
                            ? styles.selectedHighlight
                            : styles.selectedNoHighlight
                    }
                >
                    <SearchField
                        onChange={string => {
                            !isSearch && setIsSearch(true)
                            setSearchString(string)
                        }}
                        searchString={searchString}
                    />
                </FelaComponent>
                <FelaComponent
                    style={
                        !isSearch
                            ? styles.selectedHighlight
                            : styles.selectedNoHighlight
                    }
                >
                    <Select
                        onSelect={selected => {
                            isSearch && setIsSearch(false)
                            setsearchAlphabet(selected)
                        }}
                        selected={searchAlphabet}
                    />
                </FelaComponent>
            </FelaComponent>
            <StreetList
                streets={data.filter(date =>
                    isSearch
                        ? date.name.includes(searchString.toUpperCase())
                        : date.name.startsWith(searchAlphabet.toUpperCase())
                )}
            />
        </FelaComponent>
    )
}

export default App
