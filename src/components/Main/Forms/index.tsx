import { FormEvent, useState } from 'react'
import { Form, Input, InputMessage, Button } from './style.styles'
import { api } from './axios'
import { Loader } from '../../Loader'

export function Forms() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [showLoader, setShowLoader] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowLoader(true)
    console.log({ name, number, email, message })

    const data = {
      name,
      number,
      email,
      message,
    }
    const response = await api.post('/contact/', data)

    setShowLoader(false)
    if (response.status >= 200) {
      alert('Tudo certo!')
    } else {
      alert('Deu Ruim')
    }
    console.log(response.data)
  }

  return (
    <>
      <Form
        /* action="contato@walkinline.com.br" method="POST" */
        onSubmit={handleSubmit}
      >
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
            placeholder="Celular *"
            id="numero"
            value={number}
            required
            onChange={(event) => setNumber(event.target.value)}
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
      </Form>

      {showLoader && <Loader />}
    </>
  )
}
