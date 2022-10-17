import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: modal-show 0.5s;
  @keyframes modal-show {
      from {
          opacity: 0;
          margin-top: -50px;
      }
      to {
          opacity: 1;
          margin-top: 0;
      }
  }
`;

export const StyledModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledClose = styled.div`
  position: absolute;
  right: 1.4rem;
  top: 0.2rem;
  width: 10px;
  height: 10px;
  background-color: transparent;
  color: black;
  cursor: pointer;
`;

export const StyledBackground = styled.div`
  position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 0.5s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;