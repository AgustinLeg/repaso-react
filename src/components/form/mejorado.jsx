import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const FormMejorado = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const toast = useToast()
  const [errors, setErrors] = useState({})

  // console.log(values)

  const handleChange = (e) => {
    // const type = 'email'
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
    }
    setValues(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validate(values)
    if (Object.keys(errors).length === 0) {
      alert('PASO')
      return
    }
    toast({
      status: 'error',
      title: 'No paso validacion',
    })
    // console.log(errors)
  }

  const validate = (values) => {
    const errors = {}
    if (values.name.length === 0) {
      errors.name = 'Este campo es requerido'
    }
    if (values.email.length === 0) {
      errors.email = 'Este campo es requerido'
    }
    if (values.password.length === 0) {
      errors.password = 'Este campo es requerido'
    }
    setErrors(errors)
    return errors
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={10}>
        <Heading>
          Iniciar Sesion mejorado{values.name} {values.email}
        </Heading>
        <FormControl>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input
            placeholder="Nombre"
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.email}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            placeholder="password"
            type="password"
            id="password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          {errors.email}
        </FormControl>

        <Button type="submit" variant="solid" colorScheme="blue">
          Enviar
        </Button>
      </Box>
    </form>
  )
}

export default FormMejorado
