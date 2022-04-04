import React, {useState, useEffect} from 'react';
import { Button } from '../ButtonElement';
import {Link, Navigate} from 'react-router-dom';
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
    Img,
} from './InfoElements';

import {
    NavLinks
} from '../Navbar/NavbarElements';

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary, 
    dark,
    dark2 }) => {

    function handleClick(buttonLabel){
        if(buttonLabel === "Télécharger mon CV"){
            console.log('oui')
            return (
                window.location.href = 'https://drive.google.com/file/d/1FTV1qrbaQmfWvQ0oLEsCgKYvwOoGP4E4/view?usp=sharing'
            )
        } else if (buttonLabel === "Mon GitHub") {
            return (
                window.location.href = 'https://github.com/Sly695'
            )
            
        }
    }


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        onClick={() => (handleClick(buttonLabel))}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
