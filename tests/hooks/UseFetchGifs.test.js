// waiFor =- promesa
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test on Hook UseFetchGifs', () => {

  test('It has to return the initial state', () => {

    const { result } = renderHook( () => useFetchGifs('One Puch'))
    const { images, isLoading } = result.current;
    console.log(images, isLoading)

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();

  });

  test('It has to return an array of images and isLoading equals false', async() => {

    const { result } = renderHook( () => useFetchGifs('One Puch'))

    await waitFor(
      // espera hasya que suceda esto
      () => expect( result.current.images.length).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });

});