import { getGifs } from "../../src/helpers/getGifs";

describe('Test on getGifs.js', () => {
  // await
  test('Has to return an array of Gifs', async() => {
    const gifs = await getGifs('pokemon');

    console.log(gifs[0]);
    expect( gifs.length ).toBeGreaterThan(0)
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    })
  });
});