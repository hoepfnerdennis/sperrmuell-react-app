import React from 'react'
import { useFela } from 'react-fela'
import StreetList from './StreetList'
import DatePicker from './DatePicker'

const container = ({ theme }) => ({
    margin: `${theme.space.s} auto`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: theme.maxWidth,
})

const selection = ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexBasis: '300px',
    flexDirection: 'column',
    justifySelf: 'flex-start',
    margin: `0 ${theme.space.s} ${theme.space.s} ${theme.space.s}`,
})

const listview = ({ theme }) => ({
    display: 'flex',
    flexBasis: '400px',
    flexDirection: 'column',
    margin: `0 ${theme.space.s}`,
})

const OverviewPage = ({ streets, range, setRange }) => {
    const { css } = useFela()
    let filteredData = streets
    if (range.from && range.to) {
        filteredData = filteredData.filter(
            street =>
                street.time > range.from.getTime() &&
                street.time < range.to.getTime()
        )
    }
    return (
        <div className={css(container)}>
            <div className={css(selection)}>
                <DatePicker range={range} setRange={setRange} />
                {`Auswahl: ${range.from &&
                    range.from.toLocaleDateString()} bis ${range.to &&
                    range.to.toLocaleDateString()}`}
            </div>
            <div className={css(listview)}>
                <StreetList streets={filteredData} />
            </div>
        </div>
    )
}

export default OverviewPage
