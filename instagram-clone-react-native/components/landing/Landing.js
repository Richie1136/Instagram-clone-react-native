import { View, Text, Button } from 'react-native'

const Landing = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title='Register' onPress={() => navigation.navigate("Register")} />
    </View>
  )
}

export default Landing