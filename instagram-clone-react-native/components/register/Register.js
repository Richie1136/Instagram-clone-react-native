import { View, Text, Button, TextInput } from 'react-native'
import { useState } from 'react'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register