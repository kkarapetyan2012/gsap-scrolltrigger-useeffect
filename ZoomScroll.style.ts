import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const ZomScrollStyle = styled.ul`
  &.panels-container {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  }

  .panel {
    display: flex;
    text-align: left;
    padding: 285px 0;
    align-items: center;
    position: absolute;
    will-change: transform;
    height: 100vh;
    width: 100vw;
    &:first-child {
      background-color: ${theme.darkColor};
      h2,
      h3 {
        color: ${theme.primaryColor};
      }
      p {
        color: ${theme.lightColor};
      }
    }
    &:nth-child(2) {
      background-color: ${theme.primaryColor};
      h2,
      h3,
      p {
        color: ${theme.lightColor};
      }
      .index-class {
        color: ${theme.darkColor};
      }
    }
    &:nth-child(3) {
      background-color: ${theme.lightColor};
      h2,
      p {
        color: ${theme.darkColor};
      }
      h3,
      .index-class {
        color: ${theme.primaryColor};
      }
    }
    &:last-child {
      background-color: ${theme.darkColor};
      h2,
      h3 {
        color: ${theme.primaryColor};
      }
      p {
        color: ${theme.lightColor};
      }
    }
  }

  h2 {
    padding-bottom: 64px;
    font-family: ${theme.secondaryFonts};
  }
  h3 {
    padding-bottom: 24px;
    font-family: ${theme.secondaryFonts};
  }
  .index-class {
    font-size: 88px;
    font-weight: 800;
    line-height: 96px;
    font-family: ${theme.secondaryFonts};
  }
  .process-content {
    display: flex;
  }
  .content {
    padding: 0 160px;
    width: 100%;
  }
  .process-img {
    width: 100%;
    max-width: 517px;
  }

  @media screen and (max-width: ${breakpoints.screenXXL}) {
    .panel {
      padding: 135px 0;
    }
  }

  @media screen and (max-width: ${breakpoints.screenXL}) {
    .panel {
      .content {
        padding: 0 48px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    &.panels-container {
      height: auto;
      display: unset;
      position: static;
    }
    .panel {
      position: static;
      padding: 64px 0;
      display: block;
      height: auto;
      &:not(:first-child) {
        h2 {
          display: none;
        }
      }
      .process-content {
        display: unset;
      }
      .content {
        padding: 32px 0 48px;
        max-width: 100%;
      }
      .index-class {
        font-size: 80px;
        line-height: 120px;
      }
      .process-img {
        max-width: 100%;
      }
    }
  }
`;
export default ZomScrollStyle;
