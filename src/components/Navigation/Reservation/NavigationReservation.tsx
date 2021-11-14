import React, {SyntheticEvent, useEffect, useState} from 'react';
import {ReservationNavigationElement, StyledAutocomplete} from "../NavigationLayout";
import {TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import reservation from '../../../../assets/Icon-Action-Filter.svg'
import {useDispatch, useSelector} from "react-redux";
import {caravansActions} from "../../../../redux/reducers/caravansReducer";
import {getFiltersSelector} from "../../../../redux/reducers/caravansSelectors";

const useStyles = makeStyles({
    inputRoot: {
        textAlign: 'left',
        font: 'normal normal normal 16px/16px Roboto',
        letterSpacing: 0,
        color: '#1F2244',
        opacity: 1,
        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline": {
            borderWidth: 3,
            borderColor: "#119383"
        }
    }
})

const values = [{label: 'Ano', value: true}, {label: 'Ne', value: false}]

export const NavigationReservation: React.FC = React.memo(() => {
    const isInstantBooking = useSelector(getFiltersSelector).instantBooking

    const [isReservation, setIsReservation] = useState<boolean>(isInstantBooking)

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(caravansActions.instantBookingSet(isReservation))
    }, [isReservation, dispatch])

    const onChangeHandler = (e: SyntheticEvent<Element, Event>, value: any) => {
        setIsReservation(value?.value)
    }

    return (
        <ReservationNavigationElement title={'Okamžitá rezervace'} image={reservation.src}>
            <StyledAutocomplete
                disablePortal
                classes={classes}
                id="combo-box-demo"
                defaultValue={values.find(v => v.value)}
                clearIcon={false}
                options={values}
                onChange={onChangeHandler}
                sx={{ width: 176, height: 48 }}
                renderInput={(params) => <TextField {...params} />}
            />
        </ReservationNavigationElement>
    );
})

NavigationReservation.displayName = 'NavigationReservation'
