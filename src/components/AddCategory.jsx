import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = ({target}) => {
    // console.log(target.value);
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    console.log(event);
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="Buscar gif"
        value={ inputValue }
        // onChange={ (event) => onInputChange(event) }
        onChange={ onInputChange }
      />
    </form>
  )
}