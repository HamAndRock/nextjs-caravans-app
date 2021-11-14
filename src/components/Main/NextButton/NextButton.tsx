import React from 'react';
import {StyledNextButton, ButtonText} from "../MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {caravansActions} from "../../../../redux/reducers/caravansReducer";
import {getCaravansSelector, getFiltersSelector} from "../../../../redux/reducers/caravansSelectors";

export const NextButton: React.FC = () => {
    const isArray = !!useSelector(getCaravansSelector).length
    const isNextElement = useSelector(getFiltersSelector).count < useSelector(getCaravansSelector).length

    const dispatch = useDispatch()

    const onClickHandler = () => {
        isArray && isNextElement ? dispatch(caravansActions.countIncreased()) : dispatch(caravansActions.initialCountSet())
    }

    return (
        <StyledNextButton onClick={onClickHandler} isArray={isArray}>
            <ButtonText>
                {isArray && isNextElement ? 'Načíst další' : 'Vrátit zpět'}
            </ButtonText>
        </StyledNextButton>
    );
};
