import AwesomeSlider from 'react-awesome-slider'
import styled from 'styled-components'

export const SessaoSexta = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubSessaoSexta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const Carousel = styled(AwesomeSlider)`
  width: 75%;
  nav {
    margin-top: 5px;
    display: flex;
    align-items: center;
  }
`

export const Titulo3 = styled.h1`
  display: flex;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(props) => props.theme['current-title']};
  border-bottom: 2.5px solid ${(props) => props.theme['current-title']};
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media (max-width: 960px) {
    font-size: 35px;
  }
  @media (max-width: 785px) {
    font-size: 30px;
  }
`
export const ParagrafoSecundario = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 1.5rem;
  text-align: center;
  float: left;
  padding: 0px 175px;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 10px;
  }
`
