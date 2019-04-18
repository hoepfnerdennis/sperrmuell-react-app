import React, { Fragment } from 'react'
import { useFela } from 'react-fela'
import StreetList from './StreetList'
import DatePicker from './DatePicker'

const container = ({ theme }) => ({
    margin: `${theme.space.s} auto`,
    maxWidth: theme.maxWidth,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
})

const selection = ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexBasis: '300px',
    flexDirection: 'column',
    justifySelf: 'flex-start',
    margin: `0 ${theme.space.s} ${theme.space.l} ${theme.space.s}`,
})

const listview = ({ theme }) => ({
    display: 'flex',
    flexBasis: '400px',
    flexDirection: 'column',
    marginBottom: `0 ${theme.space.s}`,
})

const resultHeader = ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.space.s,
})

const OverviewPage = ({ streets, date, setDate }) => {
    const { css } = useFela()
    let filteredData = streets
    if (date) {
        filteredData = filteredData.filter(
            street =>
                street.time > date.getTime() &&
                street.time < date.getTime() + 1209600000
        )
    }
    return (
        <div className={css(container)}>
            <div className={css(selection)}>
                <DatePicker date={date} setDate={setDate} />
            </div>
            <div className={css(listview)}>
                {filteredData.length > 0 && (
                    <Fragment>
                        <div className={css(resultHeader)}>
                            {`${
                                filteredData.length
                            } Ergebnisse für ${date.toLocaleDateString()} bis ${new Date(
                                date.getTime() + 1209600000
                            ).toLocaleDateString()}`}
                        </div>
                        <StreetList streets={filteredData} />
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default OverviewPage
