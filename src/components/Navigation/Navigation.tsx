import React from 'react';
import {NavigationContainer, NavigationWrapper} from './NavigationLayout'
import {NavigationPrice} from "./Price/NavigationPrice";
import {NavigationType} from "./Type/NavigationType";
import {NavigationReservation} from "./Reservation/NavigationReservation";

export const Navigation: React.FC = React.memo(() => {
    return (
        <NavigationContainer>
            <NavigationWrapper>
                <NavigationPrice />
                <NavigationType />
                <NavigationReservation />
            </NavigationWrapper>
        </NavigationContainer>
    );
})

Navigation.displayName = 'Navigation'
