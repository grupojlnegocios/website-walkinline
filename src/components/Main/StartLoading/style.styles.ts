import styled from 'styled-components'

interface LoaderProps {
  loading: boolean
}

export const ContainerLoader = styled.div<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #0f1c2f;
  z-index: 30;
  opacity: ${(props) => (props.loading === true ? '1' : '0')};
  visibility: ${(props) => (props.loading === true ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

export const Loading = styled.div`
  animation: MoveUpDown 0.9s linear infinite;
  position: absolute;
  bottom: 0;
  margin-bottom: 13rem;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 1rem;
    }
  }

  @media (max-width: 430px) {
    margin-bottom: 20rem;
  }
`

export const Img = styled.img`
  height: 10rem;

  @media (max-width: 430px) {
    height: 7rem;
  }
`
