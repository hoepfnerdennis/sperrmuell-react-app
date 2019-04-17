import React from 'react'
import { useFela } from 'react-fela'
import { Link } from 'react-router-dom'

const container = {
    display: 'flex',
    flexDirection: 'column',
}
const streetContainer = ({ theme }) => ({
    padding: `${theme.space.s} 0`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: theme.shadow,
})
const streetName = {
    fontSize: '20px',
}
const streetDate = {
    fontSize: '16px',
}
const link = ({ theme }) => ({
    textDecoration: 'none',
    color: theme.color.dark,
    marginBottom: theme.space.m,
})

const StreetList = ({ streets }) => {
    const { css } = useFela()
    return (
        <div className={css(container)}>
            {streets.map(street => (
                <Link
                    key={`${street.name}-${street.time}`}
                    to={`/details/${street.name.toLowerCase()}`}
                    className={css(link)}
                >
                    <div className={css(streetContainer)}>
                        <div className={css(streetName)}>{street.name}</div>
                        <div className={css(streetDate)}>
                            {new Date(street.time) &&
                                new Date(street.time).toLocaleDateString()}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default StreetList
