import { ContainerLoader, Loading, Img } from './style.styles'
import LoaderIcon from '../../assets/images/incologin.png'
import { useState } from 'react'

export const StartLoading = () => {
  const [loading, setLoading] = useState(true)

  window.onload = () => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <ContainerLoader loading={loading}>
      <Loading>
        <Img src={LoaderIcon} alt="Loading Icon" />
      </Loading>
    </ContainerLoader>
  )
}
