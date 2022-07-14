import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    // console.log(event.target.value);
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(inputValue.trim().length <= 1) return;

    // setCategories( categories => [inputValue, ...categories])
    setInputValue('')
    onNewCategory( inputValue.trim() )
  }

  return (
    // <form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={ onSubmit }>
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