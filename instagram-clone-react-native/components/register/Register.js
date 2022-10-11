import { View, Text, Button, TextInput } from 'react-native'
import { useState } from 'react'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSignUp = () => {

  }

  return (
    <View>
      <TextInput placeholder='name' onChangeText={(name) => setName(name)} />
      <TextInput placeholder='email' onChangeText={(email) => setEmail(email)} />
      <TextInput placeholder='password' secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
      <Button onPress={onSignUp} title="Sign Up" />
    </View>
  )
}

export default Register