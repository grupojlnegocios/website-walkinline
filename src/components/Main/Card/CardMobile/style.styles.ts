import styled from 'styled-components'

interface VisibleProps {
  visible: boolean
}

export const CardGrid = styled.div<VisibleProps>`
  display: none;

  @media (max-width: 770px) {
    display: flex;
    position: inherit;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    z-index: 5;
    position: absolute;
    opacity: ${(props) => (props.visible === true ? '1' : '0')};
    visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
    transition: opacity 0.8s ease, visibility 0.8s ease;
  }
`

export const Card = styled.div``

export const icon = styled.img``
