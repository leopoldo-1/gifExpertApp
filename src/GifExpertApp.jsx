import { useState } from 'react';
import { Button } from 'primereact/button';

import PrimeReact from 'primereact/api';
import { AddCategory } from './components/AddCategory';


export const GiftExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon ball' ])
  const [selectCategory, setSelectCategory] = useState(null)

  PrimeReact.ripple  = true;
  const onAddCategory = () => {
    // console.log(categories);
    setCategories([ 'Valorant', ...categories ])
    // setCategories( cat => [...cat, 'Valorant'] );
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory />

      {/* listado de items/gifs */}
      <Button onClick={ onAddCategory } label="Add" icon="pi pi-plus" />
      {/* <button onClick={ onAddCategory }>Add</button> */}

      <ol>
        { categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
        {/* gif item */}

      <p>  LfUzyKCYMDP4i6KcFLjVCQJmPbg4ulk0</p>
    </>
  )

}