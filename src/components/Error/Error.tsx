import React from 'react';
import {ErrorButton, ErrorButtonText, ErrorContainer} from "./ErrorLayout";
import {useDispatch} from "react-redux";
import {getCaravans} from "../../../redux/reducers/caravansReducer";

interface PropsType {
    error: string
}

export const Error: React.FC<PropsType> = ({error}) => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(getCaravans())
    }

    return (
        <ErrorContainer>
            {error}
            <ErrorButton onClick={onClickHandler}>
                <ErrorButtonText>
                    Zkusit znovu
                </ErrorButtonText>
            </ErrorButton>
        </ErrorContainer>
    );
};
