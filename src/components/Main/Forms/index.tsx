import { useState } from 'react'
import { Input, InputMessage, Button } from './style.styles'

export function Forms() {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    console.log(`Nome: ${nome}, Número: ${numero}, Email: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(event) => setNumero(event.target.value)}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="E-mail *"
          id="email"
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
      <Button type="submit" onClick={handleSubmit}>
        Enviar
      </Button>
    </form>
  )
}
