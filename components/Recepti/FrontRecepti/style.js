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
  align-items: center;
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
export const RedLineBottom = styled(RedLine)`
  bottom: 0;
  top: unset;

  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 430px) {
  }
`;
export const WrapLogoPerla = styled.div`
  position: relative;
  z-index: 10;
  top: -10px;
  width: 324px;
  height: 152px;
  @media only screen and (max-width: 650px) {
    width: 168px;
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
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;

  width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 0 180px 0;
  margin: 0 auto;
  @media only screen and (max-width: 850px) {
    width: 100vw;
  }
  @media only screen and (max-width: 650px) {
    padding-top: 120px;
    padding-bottom: 100px;
  }
`;
export const WrapContent2 = styled.div`
  position: relative;
  z-index: 10;

  width: 1520px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 0 80px 0;
  margin: 0 auto;
  @media only screen and (max-width: 850px) {
    width: 100vw;
  }
  @media only screen and (max-width: 650px) {
    padding-top: 90px;
    padding-bottom: 0;
  }
`;
export const WrapCategories = styled.div`
  position: relative;
  z-index: 10;

  width: 860px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 0px;
  flex-wrap: wrap;
  @media only screen and (max-width: 850px) {
    width: 90vw;
  }
`;
export const WrapRecipies = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 55px;
  padding-bottom: ${(props) => (props.samoRecepti ? 100 : 0)}px;

  @media only screen and (max-width: 650px) {
    margin-top: 30px;
  }
`;
export const Pagination = styled.div`
  position: relative;
  z-index: 10;
  margin: 30px auto 0 auto;
  width: 700px;
  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`;
export const Recipe = styled.div`
  position: relative;
  z-index: 10;
  width: 359px;
  height: 431px;
  border-radius: 24px;
  overflow: hidden;
  background-color: white;
  margin: 15px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 850px) {
  }
`;
export const PhotoWrap = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 338px;

  background: ${(props) => `url(${props.photo}) no-repeat center center`};
  background-size: cover;
  @media only screen and (max-width: 850px) {
  }
`;
export const Timer = styled.div`
  position: relative;
  z-index: 10;
  width: 23px;
  height: 23px;
  background-image: url("/sat.svg");
  margin-right: 5px;
  @media only screen and (max-width: 850px) {
  }
`;
export const TextWrap = styled.div`
  position: relative;
  z-index: 10;
  width: auto;
  height: 98px;
  background-color: white;
  color: #1c2640;
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */

  padding: 15px 26px;
  @media only screen and (max-width: 850px) {
  }
`;
export const Time = styled.div`
  position: absolute;
  z-index: 10;
  color: #f5faff;

  /* Subtitle */
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  bottom: 10px;
  left: 20px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 850px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 34.57%,
    rgba(0, 0, 0, 0.66) 99.93%
  );
  background-blend-mode: multiply;
  width: 100%;
  height: 100%;
  top: 0;
  @media only screen and (max-width: 850px) {
  }
`;
export const Category = styled.div`
  display: flex;
  min-width: 70px;
  width: auto;
  padding: 0 20px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${(props) => (props.oznaka === "svi" ? "#314c5f" : "#497290")};

  color: white;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
  margin: 4px 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #6e9cbe;
  }
  &:active {
    background-color: #203849;
  }
  @media only screen and (max-width: 650px) {
    font-size: 14px;
    height: 26px;
    padding: 0 12px;
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
    width: 90vw;
    font-size: 26px;
  }
`;
export const Text = styled.p`
  color: #f5faff;
  text-align: center;
  /* B 18 */
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.5%; /* 25.65px */
  width: 670px;
  @media only screen and (max-width: 850px) {
    width: 90vw;
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
  margin-bottom: 150px;
  cursor: pointer;
  &:hover {
    background: #203c5e;
  }
  &:active {
    background: #ffffff;
    color: black;
  }
  @media only screen and (max-width: 650px) {
    margin-bottom: 80px;
    width: 278px;
    height: 41px;
    font-size: 16px;
  }
`;
export const Photo = styled.div`
  position: relative;
  color: #f5faff;
  width: 477px;
  height: 582px;
  border-radius: 6px;
  margin-bottom: 85px;
  background-image: url("/fotoMixPerla.png");
  background-size: cover;
  @media only screen and (max-width: 430px) {
    margin-bottom: 0;

    width: 100vw;
    height: 120vw;
  }
`;
export const WrapIcon = styled.div`
  position: relative;

  width: 13px;
  height: 13px;
  margin-right: 5px;

  @media only screen and (max-width: 430px) {
    width: 13px;
    height: 13px;
    margin-right: 5px;
    display: block;
  }
`;
export const WrapSocial = styled.div`
  position: absolute;
  z-index: 1;
  right: -179px;
  top: 85px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 1s ease-out;
  transition-delay: 1s;
  right: ${(props) => (props.inView ? "-179px" : "-400px")};
  opacity: ${(props) => (props.inView ? "1" : "0")};

  @media only screen and (max-width: 750px) {
    position: absolute;
    right: unset;
    top: unset;
    bottom: -7px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
  }
  @media only screen and (max-width: 430px) {
    bottom: ${(props) => (props.inView ? "67px" : "-200px")};
    opacity: ${(props) => (props.inView ? "1" : "0")};

    left: 20px;
  }
`;
export const Instagram = styled.div`
  position: relative;
  height: 23px;
  border-radius: 5px;
  /* background: #efe3cc;
  color: #1c2640; */
  background: #33250a;
  color: #efe3cc;
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 16.8px */
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  margin-bottom: 10px;
  @media only screen and (max-width: 430px) {
    background: #33250a;
    color: #efe3cc;
  }
`;

export const Facebook = styled(Instagram)`
  @media only screen and (max-width: 850px) {
  }
`;
