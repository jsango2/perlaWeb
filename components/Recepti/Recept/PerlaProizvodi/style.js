import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 1;

  min-height: 589px;
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
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
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;

  width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0 100px 0;
  @media only screen and (max-width: 850px) {
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
  @media only screen and (max-width: 850px) {
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
  @media only screen and (max-width: 1300px) {
    width: 100%;
    height: 222px;
  }
`;
export const WrapLogoPerla = styled.div`
  position: relative;
  z-index: 10;
  top: 0px;
  width: 324px;
  height: 152px;
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapLogoPerla2 = styled(WrapLogoPerla)`
  top: 160px;

  @media only screen and (max-width: 850px) {
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
  @media only screen and (max-width: 850px) {
  }
`;
export const Proizvodi = styled.div`
  position: relative;
  z-index: 10;
  width: 1305px;
  height: auto;
  margin: 83px auto 0 auto;
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center; */
  color: white;
  .slick-dots li button:before {
    color: white;
    font-size: 15px;
  }

  @media only screen and (max-width: 1300px) {
    width: 95%;
  }
  @media only screen and (max-width: 850px) {
    width: 425px;

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
    margin-bottom: 25px;

    width: 45%;
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
  width: 50%;
  /* identical to box height, or 22px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin-left: 51px;
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
