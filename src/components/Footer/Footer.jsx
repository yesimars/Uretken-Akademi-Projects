import React from 'react'
import { Copyright, FooterBottom, FooterContainer, FooterContent, FooterSection, Heading, Paragraph } from './FooterSty'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <Heading>Hakkımızda</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. 
                        Erat et lectus vel ut sollicitudin elit at amet.
                    </Paragraph>
                    <Paragraph><FaGooglePlay/>Google Play</Paragraph>
                    <Paragraph><FaAppStoreIos/>App Store</Paragraph>
                </FooterSection>

                <FooterSection>
                    <Heading>İletişim</Heading>
                    <Paragraph>Email: info@example.com</Paragraph>
                    <Paragraph>Telefon: (123) 456-7890</Paragraph>
                </FooterSection>

                <FooterSection>
                    <Heading>Sosyal Medya</Heading>
                    <Paragraph><FaFacebook />Facebook</Paragraph>
                    <Paragraph><FaTwitter />Twitter</Paragraph>
                    <Paragraph><FaInstagram />Instagram</Paragraph>
                </FooterSection>
            </FooterContent>

            <FooterBottom>
                <Copyright>&copy; 2024 Web Sitemiz. Tüm hakları saklıdır.</Copyright>
            </FooterBottom>

        </FooterContainer>
    )
}

export default Footer