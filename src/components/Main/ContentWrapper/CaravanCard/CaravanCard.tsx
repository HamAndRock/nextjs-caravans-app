import React from 'react';
import {CaravanCardContainer} from "../../MainLayout";
import {CarouselComponent} from "./Carousel/Carousel";
import {CardDescription} from "./Description/CardDescription";
import {CaravanType} from "../../../../../types/dataTypes";

export const CaravanCard: React.FC<CaravanType & {instantBooking: boolean}> = React.memo(({pictures, name, price, location, instantBookable, passengersCapacity, sleepCapacity, shower, vehicleType, toilet, instantBooking}) => {
    return (
        <CaravanCardContainer>
            <CarouselComponent images={pictures as string[]} />
            <CardDescription instantBooking={instantBooking} vehicleType={vehicleType} price={price} passengersCapacity={passengersCapacity} sleepCapacity={sleepCapacity} location={location} instantBookable={instantBookable} name={name} shower={shower} toilet={toilet} pictures={pictures} />
        </CaravanCardContainer>
    );
})

CaravanCard.displayName = 'CaravanCard'
