import React, {useEffect, useState} from 'react';
import {ContentWrapperContainer} from "../MainLayout";
import {CaravanCard} from "./CaravanCard/CaravanCard";
import {useDispatch, useSelector} from "react-redux";
import {
    getCaravansSelector,
    getFiltersSelector,
    getIsLoadingSelector
} from "../../../../redux/reducers/caravansSelectors";
import {caravansActions, getCaravans} from "../../../../redux/reducers/caravansReducer";
import {CaravanType} from "../../../../types/dataTypes";
import {Preloader} from "../../Preloader/Preloader";

export const ContentWrapper: React.FC = React.memo(() => {
    const [width, setWidth] = useState(window.innerWidth);

    const caravans = useSelector(getCaravansSelector)
    const filters = useSelector(getFiltersSelector)
    const isLoading = useSelector(getIsLoadingSelector)

    const dispatch = useDispatch()

    const setCaravansCount = () => {
        width < 400 ? dispatch(caravansActions.minCountSet()) : dispatch(caravansActions.initialCountSet())
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        setCaravansCount();
    }, [width]);

    useEffect(() => {
        dispatch(getCaravans())
    }, [])

    if(isLoading) {
        return <Preloader />
    }

    return (
        <ContentWrapperContainer>
            {caravans?.slice(0, filters.count).map((c: CaravanType) => <CaravanCard instantBooking={filters.instantBooking} toilet={c.toilet} shower={c.shower} sleepCapacity={c.sleepCapacity} name={c.name} instantBookable={c.instantBookable} location={c.location} passengersCapacity={c.passengersCapacity} price={c.price} vehicleType={c.vehicleType} pictures={c.pictures} key={c.id} />)}
        </ContentWrapperContainer>
    );
})


ContentWrapper.displayName = 'ContentWrapper'
