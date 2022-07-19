import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// haga mock completo de ese path,
// jest espera que ya todo este listo
jest.mock('../../src/hooks/useFetchGifs')

describe('Test on <GifGrid />', () => {

  const category = 'One Punch';

  test('it Has to show the loading at the begining', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={category} /> )
    screen.debug()
    expect( screen.getByText('Cargando...'));
    expect( screen.getByText( category ));

  });

  test('It has to show items when the images are loaded by userFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={category} />)
    screen.debug()

    expect(screen.getAllByRole('img').length).toBe(2)
  });

})
