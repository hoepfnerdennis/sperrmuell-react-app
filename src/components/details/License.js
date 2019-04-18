import React from 'react'
import { useFela } from 'react-fela'

const licenseStyle = ({ theme }) => ({
    marginTop: theme.space.xxl,
    fontSize: theme.font.size.s,
})

const License = () => {
    const { css } = useFela()
    return (
        <div className={css(licenseStyle)}>
            <span>Icons made by </span>
            <a
                href="https://www.freepik.com/"
                title="Freepik"
                rel="noopener noreferrer"
                target="_blank"
            >
                Freepik
            </a>
            <span> from </span>
            <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                rel="noopener noreferrer"
                target="_blank"
            >
                www.flaticon.com
            </a>
            <span> is licensed by </span>
            <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
            >
                CC 3.0 BY
            </a>
        </div>
    )
}

export default License
