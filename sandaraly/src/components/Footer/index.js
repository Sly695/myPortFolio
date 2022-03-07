import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialLogo,
    SocialIconLink,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
} from './FooterElements';



const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>About us</FooterLinksTitle>
                            <FooterLink to="/contact">Contactez-moi</FooterLink>
                            <FooterLink to="/contact">How it works</FooterLink>
                            <FooterLink to="/contact">Testimonials</FooterLink>
                            <FooterLink to="/contact">Careers</FooterLink>
                            <FooterLink to="/contact">Terms of Service</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            sly.
                        </SocialLogo>
                        <WebsiteRights>sly. {new Date().getFullYear()} All right reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
