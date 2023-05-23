import styled from 'styled-components'

export const ContainerCircle = styled.section``

export const Loading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 25;
  justify-content: center;
  align-items: center;
  background-color: #000000ab;
`
export const Circle = styled.div`
  width: 6rem;
  height: 6rem;
  border: 8px solid #ababab;
  border-radius: 50%;
  border-top-color: #1d3557;
  mask-border-mode: radial-gradient(
    farthest-side,
    #0000 calc(110% - 10px),
    #000 0
  );
  animation: spin 0.8s infinite linear;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`
