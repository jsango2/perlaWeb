import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 1;
  min-height: 500px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 160px;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  /* @media only screen and (max-width: 850px) {
    padding: 0 0 0px 0;
    align-items: flex-start;

  } */
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 1;
  min-height: 500px;
  max-width: 1440px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 100px;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  /* @media only screen and (max-width: 850px) {
    padding: 0 0 0px 0;
    align-items: flex-start;

  } */
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;
export const NaslovRecepta = styled.h1`
  position: relative;
  z-index: 1;
  color: #f5faff;

  /* H2 */
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  margin-bottom: 0;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    margin-bottom: 40px;
  }
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;

export const Button = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 6px;
  width: 319px;
  height: 44px;
  border: 1px solid #f5faff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f5faff;
  text-align: center;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%; /* 25.65px */
  margin-top: 60px;
  cursor: pointer;
  &:hover {
    background: #203c5e;
  }
  &:active {
    background: #ffffff;
    color: black;
  }
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  /* @media only screen and (max-width: 850px) {
    padding: 0 0 0px 0;
    align-items: flex-start;

  } */
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;
