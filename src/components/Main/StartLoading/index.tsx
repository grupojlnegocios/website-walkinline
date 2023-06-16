import { ContainerLoader, Loading, Img } from './style.styles'
import LoaderIcon from '../../assets/images/incologin.png'
import { useState } from 'react'

export const StartLoading = () => {
  const [loading, setLoading] = useState(true)

  return (
    <ContainerLoader
      loading={loading}
      onLoad={() =>
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    >
      <Loading>
        <Img src={LoaderIcon} alt="Loading Icon" />
      </Loading>
    </ContainerLoader>
  )
}
