import React from "react";
import styled from "styled-components";
import food1 from "../images/food1.avif";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  color: #333;
  padding: 50px 0;
`;

const HeaderContent = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentText = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const FoodImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ContentText>
          <Heading>Little Lemon</Heading>
          <SubHeading>Chicago</SubHeading>
          <Description>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Description>
          <Button to="/Booking">Reserve Table</Button>
        </ContentText>
        <ImageContainer>
          <FoodImage src={food1} alt="Food Image" />
        </ImageContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
