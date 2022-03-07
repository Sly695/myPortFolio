import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }

`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;  
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 250px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectsIcon = styled.img`
    height: 140px;
    width: 160px;
    margin-bottom : 10px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH1 = styled.h1`
    font-size : 2.5rem;
    color: #fff;
    margin-bottom: 30px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;


export const ProjectsH2 = styled.p`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #06BF71;
`;

export const ProjectsTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`;

export const ProjectsDesc = styled.p`
    font-size: 1rem;
    text-align: center;
`;