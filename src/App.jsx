import { Box, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import FormMejorado from './components/form/mejorado'
// import Navbar from './components/navbar'
// import FormSimple from './form/simple'

function App() {
  const [user, setUser] = useState(undefined)

  const handleLogin = (values) => {
    setUser(values)
  }

  return (
    <Box maxWidth="1000px" margin="0 auto" width="100%">
      {user ? (
        <Heading>{user.name}</Heading>
      ) : (
        <FormMejorado handleLogin={handleLogin} />
      )}
    </Box>
  )
}

export default App
