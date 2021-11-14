import React from 'react';
import {PreloaderContainer} from "./PreloaderLayout";
import preloader from '../../../assets/preloader.svg'

export const Preloader = () => {
    return (
        <PreloaderContainer>
            <img src={preloader.src} alt="preloader"/>
        </PreloaderContainer>
    );
};
