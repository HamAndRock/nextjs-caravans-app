import React from "react";
import {HeaderContainer, HeaderImage} from "./HeaderLayout";
import headerImage from '../../../assets/PragueLabsLogo.svg'

export const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <HeaderImage src={headerImage.src}/>
        </HeaderContainer>
    )
}
