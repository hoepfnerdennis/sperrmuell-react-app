import React from 'react'
import { FelaComponent } from 'react-fela'

const styles = {
    streetContainer: {
        padding: '25px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    streetName: {
        fontSize: '20px',
    },
    streetDate: {
        fontSize: '16px',
    },
}

const StreetList = ({ streets }) => {
    return streets.map(street => (
        <FelaComponent style={styles.streetContainer}>
            <FelaComponent style={styles.streetName}>
                {street.name}
            </FelaComponent>
            <FelaComponent style={styles.streetDate}>
                {new Date(street.time) &&
                    new Date(street.time).toLocaleDateString()}
            </FelaComponent>
        </FelaComponent>
    ))
}
export default StreetList
