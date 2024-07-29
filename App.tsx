import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

const PassswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,'Should be min of 4 character')
  .max(16,'Should be max of 16 character')
  .required('Length is required')
})
export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})