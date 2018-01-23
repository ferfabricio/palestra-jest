import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('render', () => {
    it('Verificando o que vai renderizar', () => {
      const component = shallow(<App />);
      const expected = <div className="display">0</div>;

      expect(component.contains(expected)).toEqual(true);
    })
  })
})