import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
import { 
HeroContainer,
HeroBg, 
VideoBg, 
HeroContent, 
HeroH1, 
HeroP, 
} from './HeroElements'; 

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Bienvenue sur mon PortFolio</HeroH1>
                <HeroP>
                    J'espère qu'il vous plaira, vous pourrez retrouver toutes les informations à mon propos : 
                    mes projets persos, mon github, mon cv et mes motivations :)
                </HeroP>
            </HeroContent>
        </HeroContainer>
            
        
    )
}

export default HeroSection;
