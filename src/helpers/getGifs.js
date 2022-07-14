
  export const getGifs = async(category) =>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=LfUzyKCYMDP4i6KcFLjVCQJmPbg4ulk0&q=${category}&limit=10`;
    const resp= await fetch( url );
    // data es un array
    const { data  } = await resp.json()

    // estoy retornando estas propiedades
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    // console.log(gifs)
    return gifs
  }
