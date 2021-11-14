import React from 'react';
import {ImageContainer, StyledCarousel, StyledImage} from "../../../MainLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface PropsType {
    images: string[],
    id?: string | number
}

export const CarouselComponent: React.FC<PropsType> = React.memo(({images}) => {
    return (
        <StyledCarousel>
            {
                images.map( (item, i) => <Item key={i} src={item} /> )
            }
        </StyledCarousel>
    )
})

const Item: React.FC<{ src: string }> = React.memo(({src}) => {
    return (
        <ImageContainer>
            <StyledImage src={src} alt={src}/>
        </ImageContainer>
    )
})

CarouselComponent.displayName = 'CarouselComponent'
Item.displayName = 'Item'
