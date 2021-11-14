import React from 'react';
import {MainContainer} from "./MainLayout";
import {ContentWrapper} from "./ContentWrapper/ContentWrapper";
import {NextButton} from "./NextButton/NextButton";
import {useSelector} from "react-redux";
import {getCaravansSelector, getErrorSelector} from "../../../redux/reducers/caravansSelectors";
import {Error} from '../Error/Error'

export const Main: React.FC = React.memo(() => {
    const error = useSelector(getErrorSelector)
    const arrayLength = useSelector(getCaravansSelector).length

    if(typeof window === 'undefined') {
        return null
    }

    if(error) {
        return <Error error={error}/>
    }

    return (
        <MainContainer>
            <ContentWrapper />
            {arrayLength > 6 && <NextButton/>}
        </MainContainer>
    );
})

Main.displayName = 'Main'
