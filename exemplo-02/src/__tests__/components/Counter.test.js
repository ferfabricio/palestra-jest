import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Counter from '../../components/Counter';

describe('render', () => {
  it('Verificando o que vai renderizar', () => {
    const component = shallow(<Counter initial={0} />);
    const resultHtml = '<div class="display">0</div>';

    expect(component.find('.display').html()).toEqual(resultHtml);
  });
});

describe('event', () => {
  it('Incrementando', () => {
    const component = shallow(<Counter initial={0} />);
    const resultHtml = '<div class="display">1</div>';

    component.find('.buttonUp').simulate('click');

    expect(component.find('.display').html()).toEqual(resultHtml);
  });

  it('Decrementando', () => {
    const component = shallow(<Counter initial={0} />);
    const resultHtml = '<div class="display">-1</div>';

    component.find('.buttonDown').simulate('click');

    expect(component.find('.display').html()).toEqual(resultHtml);
  });
});

