import React, {useState} from 'react';
import {TypeCardContainer, TypeCardTitle, TypeCardContent} from "../../NavigationLayout";

interface PropsType {
    title: string,
    className?: string,
    onClick: () => void,
    isInArray: boolean
}

export const TypeCard: React.FC<PropsType> = React.memo(({className, isInArray, onClick, title, children}) => {
    return (
        <TypeCardContainer onClick={onClick} className={className} isInArray={isInArray}>
            <TypeCardTitle>{title}</TypeCardTitle>
            <TypeCardContent>{children}</TypeCardContent>
        </TypeCardContainer>
    );
})

TypeCard.displayName = 'TypeCard'
