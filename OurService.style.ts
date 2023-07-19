import styled from "styled-components";
import breakpoints from "constants/breakpoints";

const OurServiceStyle = styled.div`
  .text-description {
    padding: 160px 0;
    h2 {
      padding-bottom: 64px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    .text-description {
      padding: 116px 0;
      h2 {
        padding-bottom: 24px;
      }
    }
  }
`;
export default OurServiceStyle;
