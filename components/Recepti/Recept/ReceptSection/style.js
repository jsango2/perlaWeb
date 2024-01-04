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
  justify-content: center;
  align-items: center;

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
export const Sastojci = styled.div`
  position: relative;
  z-index: 1;

  max-width: 300px;
  height: auto;
  min-height: 300px;
  width: 230px;
  padding-top: 100px;
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
  li {
    color: #f5faff;
    /* P */
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
`;
export const Postupak = styled.div`
  position: relative;
  z-index: 1;

  max-width: 65 0px;
  height: auto;
  min-height: 400px;
  width: 650px;
  padding-left: 100px;
  margin-left: 100px;
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
export const NaslovSastojci = styled.h3`
  position: relative;
  z-index: 1;

  color: #f5faff;
  /* M-H3 */
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
  text-transform: uppercase;
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
export const DobarTek = styled.h3`
  position: relative;
  z-index: 1;

  color: #f5faff;
  margin-top: 140px;
  /* H2 */
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  text-transform: uppercase;
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
export const Divider = styled.div`
  position: relative;
  z-index: 1;

  width: 80%;
  height: 1px;
  background-color: white;
  opacity: 0.2;
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
  /* @media only screen and (max-width: 850px) {
    padding: 0 0 0px 0;
    align-items: flex-start;

  } */
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;
export const NaslovReceptaPrilog = styled(NaslovRecepta)`
  margin-bottom: 40px;
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
export const PripremaVrijeme = styled.div`
  position: relative;
  z-index: 1;
  color: #f5faff;

  /* M-T */
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 16.8px */
  margin-bottom: 50px;
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
export const RedniBroj = styled.h1`
  position: absolute;
  z-index: 1;
  color: #b5d3e3;
  font-family: Gilroy;
  font-size: 90px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 108px */
  text-transform: uppercase;
  top: -10px;
  left: -140px;
  margin: 0;
  opacity: 0.22;
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
export const PostupakPripreme = styled.div`
  position: relative;
  z-index: 1;
  color: #f5faff;
  width: 470px;
  /* P */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 75px;
  img {
    width: 370px;
    object-fit: cover;
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

export const BottomCoverPhoto = styled.div`
  position: relative;
  z-index: 1;
  min-height: 680px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => `url(${props.photo}) no-repeat center center`};
  background-size: cover;
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
export const BottomOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 60%;
  width: 100%;
  background: linear-gradient(180deg, #111729 0.76%, rgba(21, 28, 50, 0) 100%);
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
