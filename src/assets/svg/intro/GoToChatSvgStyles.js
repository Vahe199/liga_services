import styled, {keyframes} from "styled-components";


const rippleAnimation = keyframes`
  0%{
    opacity:1;
    transform:scale(0)
  }
  100%{
    opacity:0;
    transform:scale(1)
  }
`
export const GoToChatSvg = styled.div`
    display: flex;
  height:56px;
  max-width: 69px;
  .DropButton{
    display:none;
  };
  .arrowBackAnimation{
    display: block;
    transform: rotate(0deg);
  };
  .pinkBg {
    background-color: #5D52D9!important;
    background-image: linear-gradient(90deg,#5D52D9, #ffffff77);
    z-index: -10;
    position: relative;
    top: 16px;
  }

  .intro-banner-vdo-play-btn i{
    line-height:56px;
    font-size:30px;
  }
  .intro-banner-vdo-play-btn .ripple{
    position:absolute;
    width:100px;
    height:100px;
    left:50%;
    top:50%;
    opacity:0;
    margin:-66px 0 0 -70px;
    border-radius:15%;
    animation:${rippleAnimation} 1.8s infinite
  }
  
  .intro-banner-vdo-play-btn .ripple:nth-child(2){
    animation-delay:.3s;
  }
  .intro-banner-vdo-play-btn .ripple:nth-child(3){
    animation-delay:.6s;
  }
  &:hover{
    .intro-banner-vdo-play-btn .ripple {
      animation-play-state: paused;
    }
    .DropButton{
      display: block;
      cursor:grabbing;
    };
    .arrowBackAnimation{
      display: none;
    };
  }
`
