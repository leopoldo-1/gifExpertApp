import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// diferente de funciontal component donde recibe props
// se recibe obj o argumentos posicionales
export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }


  useEffect( () => {
    getImages();
  }, []);

  return {
    // images: images,
    // isLoading: isLoading
    images,
    isLoading
  }

}