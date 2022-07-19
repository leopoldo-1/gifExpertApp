import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";


describe('Tests on <AddCategory />', () => {

  test('Has to change input texts value', () => {
                                  //  mandar funcion
    render( <AddCategory onNewCategory={() => {} } />);

                                  // texbox = input
    const input = screen.getByRole('textbox');
    screen.debug();

    // input = persona ingresara valores( objInput obtenido, {evt a recibir el componente/funcion})
    fireEvent.input( input, { target: {value: 'Pokemon'} })
    expect( input.value ).toBe('Pokemon');
    // screen.debug();
  });

  test('Has to call onNewCategory if input has a value', () => {

    const inputValue = 'Saitama'

    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ (onNewCategory) }/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')//aria-label=form ocupa el <form></form>

    // dispara 1er evento.. onchange
    fireEvent.input( input, { target: {value: inputValue} });
    // disparar submit del formulario
    fireEvent.submit( form )//a que nodo aplicarle el formulario
    screen.debug()
    expect( input.value ).toBe('')

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    // haya sido llamado con el valor del inputValue(caja de texto)
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    // screen.debug()
  });

  test('it doesnt have to call onNewCategory if input is empty', () => {

    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ (onNewCategory) }/>)

    const form = screen.getByRole('form')
    fireEvent.submit( form )//a que nodo aplicarle el formulario

    // expect( onNewCategory ).toHaveBeenCalledTimes(0)
    expect( onNewCategory ).not.toHaveBeenCalled()
  })


});
