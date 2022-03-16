import React from 'react';
import Icon1 from '../../image/Healthcar.png'
import Icon2 from '../../image/mygalleryscreen.png'
import Icon3 from '../../image/svg5.svg'
 
import { 
    ProjectsCard, 
    ProjectsContainer, 
    ProjectsIcon, 
    ProjectsWrapper, 
    ProjectsH2, 
    ProjectsH1, 
    ProjectsTitle,
    ProjectsDesc,
     } from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsH1>Mes projets</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>HealthCar</ProjectsH2>
                    <ProjectsTitle>WebApp afin de réserver des ambulances</ProjectsTitle>
                    <a href="https://github.com/Sly695/healthcar">En savoir plus.</a>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>myGallery</ProjectsH2>
                    <ProjectsTitle>Stocker et visualiser vos photos.</ProjectsTitle>
                    <a href="https://mygalleryappx.herokuapp.com/">myGallery.</a>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Notre futur projet</ProjectsH2>
                    <ProjectsTitle>Peut-être ?</ProjectsTitle>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
