import { FormEvent, useState } from 'react'
import { Form, Input, InputMessage, Button } from './style.styles'
import { api } from './axios'
import { Loader } from '../../Loader'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Forms() {
  const [name, setName] = useState('')
  const [cellphone, setCellPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(
    'Olá, gostaria de montar minha central.',
  )
  const [showLoader, setShowLoader] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setShowLoader(true)

    console.log({ name, cellphone, email, message })

    const data = {
      name,
      cellphone,
      email,
      message,
    }
    api
      .post('/contact/', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response: any) => {
        if (response.status === 200) {
          toast.success('Email enviado com sucesso!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        }
      })

      .catch((error: any) => {
        if (error.response.status === 400) {
          toast.warn('Email não enviado!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        } else if (error.response.status === 500) {
          toast.error(
            'Erro ao enviar o Email, tente enviar novamente mais tarde!',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            },
          )
        }
      })

    setShowLoader(false)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos seus dados e entraremos em contato!"
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="Nome Completo *"
            id="nome"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="(00) 00000-0000 *"
            id="numero"
            value={cellphone}
            required
            onChange={(event) => setCellPhone(event.target.value)}
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="E-mail *"
            id="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <InputMessage
            placeholder="Mensagem"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        <Button type="submit">Enviar</Button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Form>

      {showLoader && <Loader />}
    </>
  )
}
