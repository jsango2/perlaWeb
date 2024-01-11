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
  display: grid;
  display: grid;
  margin-top: 130px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: max-content;
  grid-column-gap: 10px;
  grid-row-gap: 8px;
  padding-top: 50px;
  padding-bottom: 100px;
  margin-left: 20px;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 850px) {
    display: flex;

    flex-direction: column;
    align-items: center;
    padding-top: 0px;
  }
  @media only screen and (max-width: 430px) {
    align-items: flex-start;
    margin-left: 20px;
  }
`;
export const WrapTopTitle = styled.div`
  position: relative;
  grid-area: 1 / 3 / 2 / 6;
  z-index: 1;
  /* margin-top: 140px; */
  margin-left: 200px;
  height: auto;
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* padding-top: 150px;
  padding-bottom: 100px;
  margin-left: 20px; */
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 850px) {
    grid-area: 1 / 3 / 3 / 6;
    margin-left: 0px;
    align-items: center;
    /* flex-direction: column;
    align-items: center; */
  }
  @media only screen and (max-width: 430px) {
    width: 90vw;
  }
`;
export const Sastojci = styled.div`
  position: relative;
  grid-area: 1 / 2 / 13 / 3;
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: auto;
  min-height: 300px;
  width: 230px;
  /* top: -220px; */
  .perlaProizvod {
    color: #4299c8;
    font-weight: 700;
  }

  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 850px) {
    grid-area: 2 / 1 / 3 / 2;
    padding-top: 0;
    max-width: 330px;
    width: 330px;
  }
  @media only screen and (max-width: 430px) {
    /* width: 90vw; */
  }
  li {
    color: #f5faff;
    /* P */
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  ul {
    padding-left: 20px;
  }
`;
export const Postupak = styled.div`
  position: relative;
  z-index: 1;
  grid-area: 2 / 3 / 13 / 6;
  max-width: 650px;
  height: auto;
  min-height: 400px;
  width: 650px;
  padding-left: 100px;
  margin-left: 100px;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 850px) {
    grid-area: 3 / 1 / 8 / 2;
    padding-left: 0;
    margin: 0 auto;
    width: 90vw;
    max-width: unset;
  }
  @media only screen and (max-width: 430px) {
    margin: 0;
  }
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
export const NaslovDodatniSastojci = styled(NaslovSastojci)`
  position: relative;
  z-index: 1;

  color: #f5faff;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  text-transform: none;
  margin-top: 20px;
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
export const Wrapbroj = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  margin: 10px 0 40px 0;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 850px) {
    margin: 0;
  }
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;
export const Broj = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0 10px;
  color: #b5d3e3;
  /* M-H3 */
  cursor: pointer;
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  opacity: 0.6;
  line-height: 120%; /* 24px */
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  /* @media only screen and (max-width: 850px) {
    padding: 0 0 0px 0;
    align-items: flex-start;

  } */
  @media only screen and (max-width: 430px) {
    margin: 0 7px;
  }
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
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    margin-top: 40px;
  }
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
  margin: 20px 0;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
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
  @media only screen and (max-width: 850px) {
    margin-bottom: 0px;
  }
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;
export const WrapNasloviBroj = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 850px) {
    margin-bottom: 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  @media only screen and (max-width: 430px) {
    width: 84vw;
  }
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
  @media only screen and (max-width: 850px) {
    left: unset;
    right: 0;
  }
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
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
  @media only screen and (max-width: 430px) {
    img {
      width: 90vw;
      object-fit: cover;
    }
  }
`;

export const BottomCoverPhoto = styled.div`
  position: relative;
  z-index: 1;
  height: 680px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => `url(${props.photo}) no-repeat center center`};
  background-size: cover;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  @media only screen and (max-width: 1100px) {
    height: 65vw;
  }
  /* @media only screen and (max-width: 430px) {
    min-height: unset;
  } */
`;
export const WrapFeaturedImage = styled.div`
  position: relative;
  z-index: 1;
  height: 190px;
  width: 250px;
  margin-top: 60px;
  /* @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  } */
  display: flex;
  @media only screen and (max-width: 850px) {
    order: -1;
    margin: 60px auto 0 auto;
  }
  @media only screen and (max-width: 430px) {
    width: 90vw;
  }
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
