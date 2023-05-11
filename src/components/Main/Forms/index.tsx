import { useState, FormEvent } from 'react'
import { Input, Button } from './style.styles'

export function Forms() {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(`Nome: ${nome}, Número: ${numero}, Email: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          placeholder="Nome"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Numero"
          id="numero"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="E-mail"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <Button type="submit"> Enviar </Button>
    </form>
  )
}
