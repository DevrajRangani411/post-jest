import React from 'react';
import { shallow } from 'enzyme';
import Home from "./index";

import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { middleware } from '../../store';


const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

const setUp =(initialState) =>{
    const store = testStore(initialState);
    const wrapper = shallow(<Home store={store} />).childAt(0).dive();
    console.log(wrapper.debug())
    return wrapper;
}

const findByTestAtribute =(component, atrr)=>{
    const wrapper = component.find(`[data-test='${atrr}']`)
    return wrapper;
}

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {"data": [{"name": "Test 1"}, {"name": "Test 2"}, {"name":"Test 3"}]}
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAtribute(wrapper, 'homeComponent');
        expect(component.length).toBe(1);
    });

    
    it('exampleMethod_returnsAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(6);
        expect(newValue).toBe(7);
    });
    
    // it('exampleMethod_updatesState Method should update state as expected', () => {
    //     const classInstance = wrapper.instance();
    //     classInstance.exampleMethod_updatesState();
    //     const newState = classInstance.state.hideBtn;
    //     expect(newState).toBe(false);
    // });
});