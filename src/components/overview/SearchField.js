import React from 'react'
import { FelaComponent } from 'react-fela'

const searchField = {
    fontSize: '1.5rem',
    padding: '0.1rem 0.1rem 0.1rem 1rem',
}

const container = {
    display: 'flex',
    alignItems: 'center',
}

const SearchField = ({ searchString, onChange }) => {
    return (
        <FelaComponent style={container}>
            <FelaComponent style={searchField}>
                {({ className }) => (
                    <input
                        className={className}
                        type="text"
                        value={searchString}
                        placeholder="Suche eine Straße..."
                        onChange={event => onChange(event.target.value)}
                    />
                )}
            </FelaComponent>
        </FelaComponent>
    )
}

export default SearchField
