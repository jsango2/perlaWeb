import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 1;

  min-height: 589px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
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
  z-index: 10;

  width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 0 0px 0;
  @media only screen and (max-width: 650px) {
    padding: 80px 0 0px 0;
    width: 100%;
  }
`;
export const BlueLine = styled.div`
  position: relative;
  z-index: 10;
  background-color: #4299c8;
  border-radius: 2px;
  width: 85px;
  height: 3px;

  @media only screen and (max-width: 850px) {
  }
`;
export const Title = styled.h1`
  color: #f5faff;

  text-align: center;
  /* H2 */
  font-family: "Roboto", sans-serif;
  max-width: 685px;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  @media only screen and (max-width: 650px) {
    font-size: 26px;
  }
`;
export const Proizvod = styled.div`
  position: relative;
  z-index: 11;
  width: 273px;
  height: auto;
  /* background: linear-gradient(180deg, #a4d4ff 0%, rgba(255, 255, 255, 0) 100%); */
  /* opacity: 0.09; */
  /* SUNRISE/Sunray */

  border-radius: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 1300px) {
    width: 100%;
    height: 222px;
  }
`;

export const WrapLogoPerla = styled.div`
  position: relative;
  z-index: 10;
  /* top: 160px; */
  width: 324px;
  height: 152px;
  @media only screen and (max-width: 650px) {
    top: 111px;
    width: 170px;
  }
`;
export const RedLine = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 49px;
  background: #e1251b;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;

  @media only screen and (max-width: 650px) {
    height: 30px;
  }
  @media only screen and (max-width: 430px) {
  }
`;
export const Button = styled.div`
  color: #f5faff;
  width: 319px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #f5faff;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%; /* 25.65px */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 84px;
  margin-bottom: 0px;

  cursor: pointer;
  &:hover {
    background: #203c5e;
  }
  &:active {
    background: #ffffff;
    color: black;
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const Proizvodi = styled.div`
  position: relative;
  z-index: 10;
  width: 1305px;
  height: auto;
  margin: 83px auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
  justify-content: center;

  @media only screen and (max-width: 1300px) {
    width: 95%;
  }
  @media only screen and (max-width: 850px) {
    width: 100vw;

    height: auto;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 450px) {
    margin: 63px auto 0 auto;

    width: 95%;
    min-width: 355px;
    justify-content: space-evenly;
  }
`;
export const WrapProizvod = styled.div`
  position: relative;
  z-index: 11;
  width: 273px;
  height: 100%;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    width: 200px;
  }
  @media only screen and (max-width: 850px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 450px) {
    margin: 15px 5px 15px 5px;

    width: 46%;
  }
`;
export const ProizvodName = styled.p`
  position: relative;
  z-index: 11;
  margin-top: 16px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  width: 90%;
  /* identical to box height, or 22px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  @media only screen and (max-width: 1300px) {
    font-size: 14px;
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
  width: 157px;
  height: 244px;
  padding: 20px;
  background-image: url("/karijereLogo/marikomerc.svg");
  background-size: 80px 80px;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 1300px) {
    width: 116px;
    height: 182px;
  }
`;
export const Karamarko = styled.div`
  position: relative;
  z-index: 10;
  width: 1440px;
  height: auto;
  display: flex;
  /* overflow: hidden; */

  justify-content: center;
  margin: 230px auto 0px auto;
  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 800px) {
  }
`;
export const Title2 = styled.h1`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  text-align: left;

  /* SUNRISE/Sunray */

  color: #f5faff;
  width: 680px;
  margin: 0 auto 0 auto;
  @media only screen and (max-width: 1000px) {
    font-size: 36px;
    width: 75%;
  }
  @media only screen and (max-width: 850px) {
    font-size: 24px;
    text-transform: unset;
    text-align: center;
  }
  @media only screen and (max-width: 430px) {
    width: 99%;
  }
`;
export const LogoHks = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 65px;
  width: 120px;
  height: 120px;
  @media only screen and (max-width: 850px) {
    width: 100px;
    height: 100px;
    margin: 85px auto 0 auto;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    width: 70px;
    height: 70px;
    /* margin: 45px auto 0 auto; */
    top: 290px;
    left: 20px;
    /* position: absolute;
    top: 360px;
    width: 90px;
    height: 90px; */
  }
  @media only screen and (max-width: 350px) {
    top: 290px;

    width: 60px;
    height: 60px;
    /* position: absolute;
    top: 380px;
    width: 90px;
    height: 90px; */
  }
`;
export const Right = styled.div`
  position: relative;
  z-index: 10;
  width: 655px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
    height: auto;
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;
export const Left = styled.div`
  position: relative;
  z-index: 10;
  width: 600px;
  height: auto;
  display: flex;
  justify-content: center;
  padding-left: 70px;
  align-items: flex-end;
  @media only screen and (max-width: 1000px) {
    align-items: flex-end;
    width: 100%;
    padding-left: 0;
  }
  @media only screen and (max-width: 430px) {
    align-items: flex-end;
    width: 100vw;
    padding-left: 0;
  }
`;
export const ImageWrap = styled.div`
  position: relative;
  z-index: 10;
  height: 543px;
  width: 400px;
  background-image: url("/karamarko.png");
  background-size: cover;
  @media only screen and (max-width: 1000px) {
    height: 395px;
    width: 300px;
  }
  @media only screen and (max-width: 650px) {
    width: 70vw;
  }
  @media only screen and (max-width: 430px) {
    height: 371px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }
  @media only screen and (max-width: 370px) {
    height: 310px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }
`;
export const Potpis = styled.div`
  position: absolute;
  z-index: 11;
  width: 330px;
  height: 300px;

  left: -135px;
  top: ${(props) => props.percentage * 50 + 190}px;
  @media only screen and (max-width: 1000px) {
    width: 220px;
    height: 230px;
    left: 41px;
    top: 341px;
  }

  @media only screen and (max-width: 430px) {
    width: 180px;
    height: 190px;
    top: 0px;

    left: 0px;
  }
`;
export const PozadinaPerla = styled.div`
  position: absolute;
  z-index: 10;
  width: 560px;
  height: 550px;
  bottom: ${(props) => props.percentage * 70}px;

  left: -195px;
  @media only screen and (max-width: 1000px) {
    left: -95px;

    position: relative;
    width: 560px;
    height: 550px;
  }
  @media only screen and (max-width: 800px) {
    left: 10px;
    width: 50%;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    bottom: ${(props) => props.percentage * 70 - 40}px;

    left: 0px;
    width: 80%;
  }
`;
