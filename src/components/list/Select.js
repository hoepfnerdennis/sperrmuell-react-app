import React from 'react'
import { FelaComponent } from 'react-fela'

const selectOptions = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]

const container = {
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
}

const select = {
    fontSize: '1.5rem',
    padding: '0.1rem 0.1rem 0.1rem 1rem',
}

const Select = ({ selected, onSelect }) => {
    return (
        <FelaComponent style={container}>
            <FelaComponent style={select}>
                {({ className }) => (
                    <select
                        className={className}
                        value={selected}
                        onChange={event => onSelect(event.target.value)}
                    >
                        {selectOptions.map(selectOption => (
                            <option value={selectOption}>{selectOption}</option>
                        ))}
                    </select>
                )}
            </FelaComponent>
        </FelaComponent>
    )
}

export default Select
