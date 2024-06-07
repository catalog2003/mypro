import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.section`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
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

const ConfirmedBooking = () => {
  return (
    <Container>
      <Content>
        <Title>Booking Confirmed!</Title>
        <Subtitle>Your booking has been successfully confirmed.</Subtitle>
        <Button to="/">Back to Home</Button>
      </Content>
    </Container>
  );
};

export default ConfirmedBooking;
