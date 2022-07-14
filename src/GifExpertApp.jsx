import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
  // PrimeReact.ripple  = true;

  const [ categories, setCategories ] = useState([ 'One Punch' ])

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;
    // console.log(newCategory);
    setCategories([ newCategory, ...categories ])
    // setCategories( cat => [...cat, 'Valorant'] );
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {
        categories.map( (category ) => (
              <GifGrid
                key={ category }
                category={ category }
              />
              // <div key={ category }>
              //   <h1>{ category }</h1>
              //   <li>{ category }</li>
              // </div>
        ))
      }

    </>
  )

}