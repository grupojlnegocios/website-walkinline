import { FormEvent, useState } from 'react'
import { Form, Input, InputMessage, Button } from './style.styles'
import { api } from './axios'

export function Forms() {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      nome,
      numero,
      email,
      message,
    }
    const response = await api.post('/contact/', data)
    console.log(response.status)

    if (response.status >= 200) {
      alert('Tudo certo!')
    } else {
      alert('Deu Ruim')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          placeholder="Nome *"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Celular *"
          id="numero"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="E-mail *"
          id="email"
          value={email}
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
  )
}
