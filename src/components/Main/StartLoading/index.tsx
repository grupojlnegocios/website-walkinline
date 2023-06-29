import { ContainerLoader, Loading, Img } from './style.styles'
import LoaderIcon from '../../assets/images/incologin.png'
import { useState } from 'react'

interface Props {
  setLgpd: () => void
}

export const StartLoading = ({ setLgpd }: Props) => {
  const [loading, setLoading] = useState(true)

  function handleLgpd() {
    setLgpd()
  }

  return (
    <ContainerLoader
      loading={loading}
      onLoad={() =>
        setTimeout(() => {
          setLoading(false)
          handleLgpd()
        }, 2000)
      }
    >
      <Loading>
        <Img src={LoaderIcon} alt="Loading Icon" />
      </Loading>
    </ContainerLoader>
  )
}
