import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 1;

  height: 410px;
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
export const HeroContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.photo}) no-repeat center center`};
  background-size: cover;
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 430px) {
  }
`;
export const Galeb1 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: 5%;
  left: 20%;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const Galeb2 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: 250px;
  left: 40%;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const Galeb3 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: -3%;
  right: 34%;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const HeroTitle = styled.h1`
  @media only screen and (max-width: 420px) {
  }
`;
export const Icon = styled.a`
  position: absolute;
  cursor: pointer;
  text-decoration: none;
  color: white;
  bottom: 20px;
  right: 40px;

  &:active {
    -webkit-tap-highlight-color: transparent;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const WrapText = styled.div`
  width: 504px;

  @media only screen and (max-width: 1100px) {
    padding-right: 25px;
  }
  @media only screen and (max-width: 850px) {
    width: 90%;
    padding-left: 27px;
    padding-top: 60px;
  }
  @media only screen and (max-width: 430px) {
    padding-top: 50px;
  }
`;

export const WrapImage = styled.div`
  position: relative;
  width: 666px;
  height: 507px;
  border-radius: 3px;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-image: url("/marikomerc.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 50vw;
    min-height: 300px;
    max-height: 780px;
  }
  @media only screen and (max-width: 430px) {
  }
`;
export const Broj = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
  height: 30px;
  color: #4299c8;
  opacity: 0.5;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Linija = styled.div`
  position: relative;
  width: 50px;
  height: 1px;
  background-color: #4299c8;
  margin-right: 54px;
  opacity: 0.5;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: var(--h2);
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* or 48px */

  /* SUNRISE/Sunray */

  /* color: #f5faff; */
  color: var(--color-boja-marikomerc-bijela);
  &.inViewHero {
    top: 0px;
    opacity: 1;
    transition: all 2s ease-out;
  }
  &.outViewHero {
    top: 25px;
    opacity: 0;
  }

  @media only screen and (max-width: 900px) {
    font-size: var(--h3);
  }
  @media only screen and (max-width: 430px) {
    margin-top: 0;

    font-size: 30px;
  }
`;
export const SubTitle = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: var(--p);

  line-height: 25px;
  /* or 179% */

  letter-spacing: 0.175px;

  /* SUNRISE/Sunray */

  color: #7e7d7d;

  /* mix-blend-mode: normal; */

  margin-bottom: 45px;
  width: 75%;
  &.inViewHero {
    top: 0px;
    opacity: 1;
    transition: all 2s ease-out;
    transition-delay: 0.5s;
  }
  &.outViewHero {
    top: 25px;
    opacity: 0;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
  }
`;
