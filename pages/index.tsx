import React from "react";
import {PageWrapper} from "../src/components/LayoutComponents";
import {Header} from "../src/components/Header/Header";
import {Navigation} from "../src/components/Navigation/Navigation";
import {Main} from "../src/components/Main/Main";
import {Provider} from "react-redux";
import {store} from "../redux/store";

const Home: React.FC = React.memo(() => {
    return (
        <Provider store={store}>
            <PageWrapper>
                <Header />
                <Navigation />
                <Main />
            </PageWrapper>
        </Provider>
    )
})

Home.displayName = 'Home'

export default Home
