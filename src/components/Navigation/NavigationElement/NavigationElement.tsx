import React from 'react';
import {NavigationContent, NavigationElementContainer, NavigationTitle} from "../NavigationLayout";

interface PropsType {
    title: string,
    image?: string,
    className?: string
}

export const NavigationElement: React.FC<PropsType> = React.memo(({className, title, image, children}) => {
    return (
        <NavigationElementContainer className={className}>
            <NavigationTitle>
                {title} {!!image && <img src={image} alt={image}/>}
            </NavigationTitle>
            <NavigationContent>
                {children}
            </NavigationContent>
        </NavigationElementContainer>
    );
})

NavigationElement.displayName = 'NavigationElement'
