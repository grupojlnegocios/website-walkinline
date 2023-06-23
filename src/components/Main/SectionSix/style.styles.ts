import AwesomeSlider from 'react-awesome-slider'
import styled from 'styled-components'

interface VisibleProps {
  visible: boolean
  visibleMobile?: boolean
}

export const SessaoSexta = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubSessaoSexta = styled.div<VisibleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-width: 785px) {
    opacity: ${(props) => (props.visibleMobile === true ? '1' : '0')};
    visibility: ${(props) =>
      props.visibleMobile === true ? 'visible' : 'hidden'};
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }
`

export const Carousel = styled(AwesomeSlider)<VisibleProps>`
  width: 75%;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  nav {
    margin-top: 5px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 785px) {
    width: 100%;
    opacity: ${(props) => (props.visibleMobile === true ? '1' : '0')};
    visibility: ${(props) =>
      props.visibleMobile === true ? 'visible' : 'hidden'};
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }
`

export const Titulo = styled.h1`
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
export const Paragrafo = styled.p<VisibleProps>`
  color: ${(props) => props.theme['current-text']};
  font-size: 1.5rem;
  text-align: center;
  float: left;
  padding: 0px 175px;
  position: relative;
  right: ${(props) => (props.visible === true ? '0' : '50%')};
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease, right 0.8s ease;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 10px;
    right: ${(props) => (props.visibleMobile === true ? '0' : '50%')};
    opacity: ${(props) => (props.visibleMobile === true ? '1' : '0')};
    visibility: ${(props) =>
      props.visibleMobile === true ? 'visible' : 'hidden'};
    transition: opacity 0.5s ease, visibility 0.5s ease, right 0.8s ease;
  }
`
