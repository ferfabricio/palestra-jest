import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../../components/Counter';

import { shallow } from 'enzyme';

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
});

