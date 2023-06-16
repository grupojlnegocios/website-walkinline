import { ContainerLoader, Loading, Img } from './style.styles'
import LoaderIcon from '../../assets/images/incologin.png'
import { useState } from 'react'

export const StartLoading = () => {
  const [loading, setLoading] = useState(true)

  if (document.readyState === 'complete') {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  return (
    <ContainerLoader loading={loading}>
      <Loading>
        <Img src={LoaderIcon} alt="Loading Icon" />
      </Loading>
    </ContainerLoader>
  )
}
