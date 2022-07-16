
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'

describe('Tests on <GifItem/>', () => {

  const title = 'Pokemon'
  const url = 'https://www.pokemon.com/blastoise.jpg'

  test('Has to do match with the snapshot', () => {

    // Act/actuar
    const { container } = render(<GifItem title={title} url={url} />);

    // Assert/afirmar
    expect( container ).toMatchSnapshot();

  });



  test('Has to show the image with the URL and the ALT indicated', () => {

    render( <GifItem title={title} url={url} />)
    // screen.debug()

    // expect( screen.getByRole('img').alt ).toBe( title )
    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( title )
  });

  test('Has to show the title on the components', () => {
    render( <GifItem title={title} url={url} />)
    expect(screen.getByText( title )).toBeTruthy();
  })


})
