import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 1;

  height: auto;
  width: 100%;
  display: flex;
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
export const Container = styled.div`
  position: relative;
  z-index: 1;

  min-height: 410px;
  max-width: 1520px;
  height: auto;
  width: 100%;
  margin-top: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  @media only screen and (max-width: 850px) {
    width: 100vw;
  }
  @media only screen and (max-width: 650px) {
    padding-top: 0px;
    padding-bottom: 0;
  }
`;
export const Proizvod = styled.div`
  position: relative;
  z-index: 11;
  width: 566px;
  height: 616px;
  /* background: linear-gradient(180deg, #a4d4ff 0%, rgba(255, 255, 255, 0) 100%); */
  /* opacity: 0.09; */
  /* SUNRISE/Sunray */

  border-radius: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1300px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #a4d4ff 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.09;
  /* SUNRISE/Sunray */
  border: 1px solid #f5faff;

  border-radius: 39px;

  @media only screen and (max-width: 600px) {
  }
`;
export const WrapProizvodImage = styled.div`
  position: relative;
  z-index: 11;
  width: 330px;
  height: 500px;
  padding: 20px;
  background-image: url("/karijereLogo/marikomerc.svg");
  background-size: 80px 80px;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 1300px) {
  }
`;
export const Data = styled.div`
  position: relative;
  z-index: 11;
  width: 450px;
  height: 500px;
  margin-left: 70px;
  padding-top: 100px;
  @media only screen and (max-width: 1300px) {
  }
`;

export const Pakiranje = styled.div`
  position: relative;
  z-index: 11;
  color: #b5d3e3;
  /* P */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const Naziv = styled.div`
  position: relative;
  z-index: 11;
  color: #f5faff;

  /* H2 */
  font-family: "Roboto Condensed", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  margin: 20px 0 10px 0;
  @media only screen and (max-width: 1300px) {
  }
`;
export const NazivLat = styled.div`
  position: relative;
  z-index: 11;
  color: #b5d3e3;
  /* latinski jezik */
  font-family: Gilroy;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 153%; /* 21.42px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const WrapInfo = styled.div`
  position: relative;
  z-index: 11;
  margin: 20px 0 20px 0;
  word-wrap: normal;
  @media only screen and (max-width: 1300px) {
  }
`;
export const WrapCerts = styled.div`
  position: relative;
  z-index: 11;
  height: 65px;
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  @media only screen and (max-width: 1300px) {
  }
`;
export const Download = styled.a`
  position: relative;
  z-index: 11;
  color: #f5faff;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  text-decoration-line: underline;

  cursor: pointer;
  @media only screen and (max-width: 1300px) {
  }
`;
export const WrapCert = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  max-width: 150px;
  @media only screen and (max-width: 600px) {
    /* margin-top: 35px; */
    top: 5px;
    margin: 5px 0 0 0;
  }
`;
