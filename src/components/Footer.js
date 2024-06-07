import React from "react";
import styled from "styled-components";
import small_logo from "../images/small_logo.png";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 0;
`;

const FooterContent = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const FooterSection = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SectionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SectionListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo src={small_logo} alt="Small Logo" />
        </FooterSection>
        <FooterSection>
          <SectionTitle>Document Navigation</SectionTitle>
          <SectionList>
            <SectionListItem>Home</SectionListItem>
            <SectionListItem>About</SectionListItem>
            <SectionListItem>Menu</SectionListItem>
            <SectionListItem>Reservations</SectionListItem>
            <SectionListItem>Order Online</SectionListItem>
            <SectionListItem>Login</SectionListItem>
          </SectionList>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Contact</SectionTitle>
          <SectionList>
            <SectionListItem>Address</SectionListItem>
            <SectionListItem>Phone Number</SectionListItem>
            <SectionListItem>Email</SectionListItem>
          </SectionList>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Social Media Links</SectionTitle>
          <SectionList>
            <SectionListItem>Facebook</SectionListItem>
            <SectionListItem>Twitter</SectionListItem>
            <SectionListItem>Instagram</SectionListItem>
          </SectionList>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
