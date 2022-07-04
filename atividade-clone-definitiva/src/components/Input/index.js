import { InputContainer } from "./styles"


export const Input = ({ placeholder, setText, value }) => {
  return (
    <InputContainer
      value={value}
      onChangeText={(text) => setText(text)}
      placeholder={placeholder}
    />
  )
}