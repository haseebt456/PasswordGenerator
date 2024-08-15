import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'

const PassswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,'Should be min of 4 character')
  .max(16,'Should be max of 16 character')
  .required('Length is required')
})
export default function App() {
  const [password, setPassword] = useState('')
  const [isPasswordGenerated,setIsPasswordGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, useNumbers] = useState(false)
  const [symbols, useSymbols] = useState(false)
  
  const generatePasswordString = (passwordLength: number)=>{
    let characterList=''
    const uppecasechars = 'QWERTUIOPASDFGHKLXCVBNM'
    const lowercasechars = 'qwertuiopasdfghjklzxcvbnm'
    const digitchars = '1234567890'
    const specialchars = '!@#$%&*?'

    if(lowerCase)
    {
      characterList+=lowercasechars
    }
    if(upperCase)
    {
      characterList +=uppecasechars
    }
    if(numbers)
    {
      characterList+=digitchars
    }
    if(symbols)
    {
      characterList+=specialchars
    }
    const passwordResult = createPassword(characterList,passwordLength)
    setPassword(passwordResult)
    setIsPasswordGenerated(true)
  }
  const createPassword = (character: string, passwordLength: number)=>{
    let result = ''
    for(let i=0; i < passwordLength; i++)
    {
      const characterIndex = Math.round(Math.random()+character.length)
      result += character.charAt(characterIndex)
    }
    return result
  }
  const resetPasswordState = ()=>{}
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})