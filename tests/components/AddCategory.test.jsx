import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";


describe('Tests on <AddCategory />', () => {

  test('Has to change input texts value', () => {
    render( <AddCategory onNewCategory={() => {} } />);

                                  // texbox = input
    const input = screen.getByRole('textbox');
    console.log(input);

    // input = persona ingresara valores( objInput obtenido, {evt a recibir el componente/funcion})
    fireEvent.input( input, { target: {value: 'Pokemon'} })
    expect( input.value ).toBe('Pokemon');
    // screen.debug();
  });

});
