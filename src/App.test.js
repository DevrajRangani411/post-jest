import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './component/Header';
import { shallow } from 'enzyme';


describe('App', () => {
  const wrapper = shallow(<App />);

  describe('renders', () => {
    it('CharacterContainer', () => {
      const element = <Header logo='DEV'/>;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });
});