import styled from 'styled-components'

interface LoaderProps {
  loading: boolean
}

export const ContainerLoader = styled.div<LoaderProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #0f1c2f;
  z-index: 30;
  opacity: ${(props) => (props.loading === true ? '1' : '0')};
  visibility: ${(props) => (props.loading === true ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

export const Loading = styled.div`
  animation: MoveUpDown 0.9s linear infinite;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 1rem;
    }
  }
`

export const Img = styled.img`
  height: 10rem;

  @media (max-width: 430px) {
    height: 7rem;
  }
`
