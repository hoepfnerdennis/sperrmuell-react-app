import React from 'react'
import { useFela } from 'react-fela'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const container = ({ theme }) => ({
    backgroundColor: theme.color.secoundary,
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
})

const title = ({ theme }) => ({
    color: theme.color.light,
    textAlign: 'center',
    margin: '1rem 2rem',
})
const link = {
    textDecoration: 'none',
}

const Header = () => {
    const { css } = useFela()
    return (
        <div className={css(container)}>
            <Helmet>
                <title>Sperrmüll</title>
            </Helmet>
            <Link to="/" className={css(link)}>
                <h1 className={css(title)}>Sperrmüll in Karlsruhe</h1>
            </Link>
        </div>
    )
}

export default Header
