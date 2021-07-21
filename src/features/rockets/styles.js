import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-smooth: auto;
  font-weight: 300;
  line-height: 1.5;
  color: #444;
`;

/** Styled rocket card */
export const RocketCardWrapper = styled.figure`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 675px;
  height: 750px;
  border-radius: 10px;
  margin: 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    img {
      transform: scale(1.25);
    }
    figcaption {
      bottom: 0;
    }
  }
`;

export const TextDrawer = styled.figcaption`
  position: absolute;
  box-sizing: border-box;
  bottom: -25%;
  left: 0;
  width: 100%;
  height: 34%;
  margin: 0;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  color: white;
  line-height: 1;
  transition: 1.25s;
`;

export const Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 20px;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 60px;
  font-weight: 300;
  line-height: 1;
`;

export const Hearth = styled.h2`
  position: absolute;
  top: 20px;
  right: 20px;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.isFavorite ? 'red' : 'white')};
  font-size: 30px;
  font-weight: 300;
  line-height: 1;
  cursor: pointer;
`;

export const Subtitle = styled.h3`
  margin: 0 0 20px;
  padding: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.75;
`;

export const Image = styled.img`
  height: 100%;

  transition: 1.25s;
`;

export const BackgroundSparkles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  animation: move 400s linear infinite;
  background: black
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
  z-index: 0;

  @keyframes move {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
`;
