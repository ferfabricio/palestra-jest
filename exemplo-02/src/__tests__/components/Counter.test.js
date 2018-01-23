import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../../components/Counter';

import { shallow } from 'enzyme';

describe('render', () => {
  it('Verificando o que vai renderizar', () => {
    const component = shallow(<Counter initial={0} />);
    const expected = <div className="display">0</div>;

    expect(component.contains(expected)).toEqual(true);
  })
})