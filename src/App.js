import React, { useState } from 'react'
import { useFela } from 'react-fela'
import { HashRouter, Route } from 'react-router-dom'
import streets from './data/data.json'
import OverviewPage from './components/overview/OverviewPage'
import Header from './components/header/Header'
import DetailPage from './components/details/DetailPage'

const font = { fontFamily: "'Open Sans', sans-serif" }

const App = () => {
    const { css } = useFela()
    const today = new Date()
    const [range, setRange] = useState({
        from: today,
        to: new Date(today.getTime() + 1209600000),
    })
    return (
        <HashRouter>
            <div className={css(font)}>
                <Route component={Header} />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <OverviewPage
                            streets={streets}
                            range={range}
                            setRange={setRange}
                        />
                    )}
                />
                <Route
                    path="/details/:street"
                    render={({ match }) => {
                        const selectedStreet = streets.find(
                            street =>
                                street.name.toUpperCase() ===
                                match.params.street.toUpperCase()
                        )
                        return <DetailPage street={selectedStreet} />
                    }}
                />
            </div>
        </HashRouter>
    )
}

export default App
