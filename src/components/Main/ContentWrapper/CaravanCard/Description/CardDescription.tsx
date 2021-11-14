import React from 'react';
import {
    DescriptionContainer,
    DescriptionType,
    DescriptionName,
    DescriptionLocation,
    IconsContainer,
    IconWrapper,
    StyledIcon,
    Count,
    PriceContainer,
    PriceTitle,
    TotalPrice,
    FastReservationIcon
} from "../../../MainLayout";
import passengers from '../../../../../../assets/Icon-Sitting.svg'
import sleep from '../../../../../../assets/Icon-Bed.svg'
import wash from '../../../../../../assets/Icon-Shower.svg'
import wc from '../../../../../../assets/Icon-WC.svg'
import fastReservation from '../../../../../../assets/Icon-Action-Filter.svg'
import {CaravanType} from "../../../../../../types/dataTypes";

export const CardDescription: React.FC<CaravanType & { instantBooking: boolean }> = React.memo(({name, vehicleType, toilet, shower, sleepCapacity, passengersCapacity, instantBookable, location, price, instantBooking}) => {
    const typeDict: { [index: string]: string } = {
        Campervan: 'Campervan',
        Intergrated: 'Integrál',
        BuiltIn: 'Vestavba',
        Alcove: 'Přívěs'
    }
    return (
        <DescriptionContainer>
            <DescriptionType>{typeDict[vehicleType]}</DescriptionType>
            <DescriptionName>{name}</DescriptionName>
            <DescriptionLocation>{location}</DescriptionLocation>
            <IconsContainer>
                <IconWrapper>
                    <StyledIcon src={passengers.src} alt={'passengersCapacity'}/>
                    <Count>{passengersCapacity}</Count>
                </IconWrapper>
                <IconWrapper>
                    <StyledIcon src={sleep.src} alt={'sleepCapacity'}/>
                    <Count>{sleepCapacity}</Count>
                </IconWrapper>
                {shower &&
                <IconWrapper>
                    <StyledIcon src={wash.src} alt={'shower'}/>
                </IconWrapper>}
                {toilet &&
                <StyledIcon src={wc.src} alt={'toilet'}/>}
            </IconsContainer>
            <PriceContainer>
                <PriceTitle>Cena od</PriceTitle>
                <TotalPrice>
                    {price} Kč/den
                    {instantBookable && instantBooking && <FastReservationIcon src={fastReservation.src} alt={'fastReservation'}/>}
                </TotalPrice>
            </PriceContainer>
        </DescriptionContainer>
    );
})

CardDescription.displayName = 'CardDescription'
