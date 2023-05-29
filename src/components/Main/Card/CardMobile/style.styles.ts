import styled from 'styled-components'

export const CardGrid = styled.div`
  display: none;

  @media (max-width: 770px) {
    display: flex;
    position: inherit;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    z-index: 5;
    position: absolute;
  }
`

export const Card = styled.div``

export const icon = styled.img``
