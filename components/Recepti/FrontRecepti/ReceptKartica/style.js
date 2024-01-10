import Link from "next/link";
import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 2;

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

  @media only screen and (max-width: 850px) {
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
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;

  width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 0 100px 0;
  @media only screen and (max-width: 850px) {
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
  flex-wrap: wrap;
  @media only screen and (max-width: 850px) {
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
  margin-top: 125px;
  @media only screen and (max-width: 850px) {
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

  @media only screen and (max-width: 430px) {
    width: 90vw;
    height: 401px;
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
export const WrapRecipe = styled(Link)`
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 850px) {
  }
`;
export const TextWrap = styled.div`
  position: relative;
  z-index: 10;
  width: auto;
  height: 98px;
  /* background-color: white; */
  color: #1c2640;
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
  cursor: pointer;
  padding: 15px 26px;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #00304a;
    color: white;
  }
  /* ${Recipe}:hover {
    background-color: #00304a;
  } */
  @media only screen and (max-width: 650px) {
    font-size: 18px;
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
  background: #497290;
  color: white;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
  margin: 6px 7px;
  cursor: pointer;
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
  @media only screen and (max-width: 850px) {
  }
`;
export const Photo = styled.div`
  position: relative;
  color: #f5faff;
  width: 477px;
  height: 582px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 85px;
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapSocial = styled.div`
  position: relative;
  right: -360px;
  top: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
  }
`;
export const Instagram = styled.div`
  position: relative;
  height: 23px;
  border-radius: 5px;
  background: #efe3cc;
  color: #1c2640;
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
  @media only screen and (max-width: 850px) {
  }
`;

export const Facebook = styled(Instagram)`
  @media only screen and (max-width: 850px) {
  }
`;
