import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const FormSimple = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  console.log({ name, email })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setName('')
        setEmail('')
      }}
    >
      <Box display="flex" flexDirection="column" gap={10}>
        <Heading>
          Iniciar Sesion {name} {email}
        </Heading>
        <FormControl>
          <FormLabel htmlFor="name">Pepe</FormLabel>
          <Input
            placeholder="Nombre"
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              // console.log(e.target.value)
              setName(e.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            placeholder="Email"
            type="text"
            id="email"
            value={email}
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </FormControl>
        <Button type="submit" variant="solid" colorScheme="blue">
          Enviar
        </Button>
      </Box>
    </form>
  )
}

export default FormSimple
