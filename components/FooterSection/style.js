import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 450px;
  background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #374772 0%,
      #101628 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  @media only screen and (max-width: 430px) {
    height: auto;
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 917px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const WrapLogo = styled.div`
  position: relative;
  z-index: 10;
  width: 230px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url("/karijereLogo/marikomerc.svg");
  background-position: center;
  background-size: 130px 100px;
  background-repeat: no-repeat;
  &.inView {
    top: 0px;
    opacity: 1;
    transition: all 2s ease-out;
  }
  &.outView {
    top: 25px;
    opacity: 0;
  }
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Social = styled.div`
  position: relative;
  z-index: 10;
  width: 175px;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
  }
`;

export const Copy = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  @media only screen and (max-width: 770px) {
  }
`;
export const CopyLink = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* SUNRISE/Sunray */

  color: #f5faff;
  cursor: pointer;
  margin: 0 10px;
  strong {
    margin-left: 5px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-width: 650px) {
    margin: 35px 10px 0px 10px;
    flex-direction: column;
  }
`;
export const BlueLine = styled.div`
  position: relative;
  z-index: 10;
  height: 3px;
  width: 146px;
  background-color: #4299c8;
  margin: 85px auto 25px auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  color: #f5faff;
  text-align: center;

  /* Buttons */
  font-family: Gilroy;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 25.2px */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Name = styled.h2`
  font-family: "Metrophobic";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin: 17px auto 45px auto;
  @media only screen and (max-width: 770px) {
    margin: 17px auto 0px auto;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const SubName = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */
  text-transform: uppercase;
  /* SUNRISE/Sunray */

  color: #f5faff;
  margin-bottom: 25px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapColumns = styled.div`
  position: relative;
  z-index: 10;
  width: 1190px;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px auto 0 auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const MainLinks = styled.div`
  position: relative;
  z-index: 10;
  max-width: 780px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 65px;
  margin-bottom: 65px;
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;
export const SubLinks = styled.div`
  position: relative;
  z-index: 10;
  width: 937px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 105px;
  @media only screen and (max-width: 1000px) {
    width: 95%;
  }
  @media only screen and (max-width: 770px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 65px;
    min-width: 430px;
  }
  @media only screen and (max-width: 430px) {
    justify-content: center;
    flex-wrap: nowrap;
    margin-top: 65px;
    min-width: 100%;
  }
`;
export const SingleLink = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
export const SingleLink2 = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 153%;
  /* or 21px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
    margin: 3px 0;
  }
`;
export const Column = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: flex-start;

  @media only screen and (max-width: 770px) {
    width: 140px;
  }
  @media only screen and (max-width: 430px) {
    width: 162px;
    margin-left: 45px;
  }
`;
export const Column2 = styled(Column)`
  @media only screen and (max-width: 430px) {
    margin-left: 5px;
  }
`;
export const ColumnIkone = styled(Column)`
  @media only screen and (max-width: 430px) {
    margin-left: 0px;
  }
`;
export const Divider = styled.div`
  position: relative;
  z-index: 10;
  width: 147px;
  height: 2px;
  background-color: #b5d3e3;
  margin: 5px auto;
  @media only screen and (max-width: 600px) {
  }
`;

export const Kontakt = styled.p`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
`;
