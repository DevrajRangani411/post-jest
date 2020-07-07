import React from 'react';
import { shallow } from 'enzyme';
import SharedButton from './index';

import checkPropTypes from 'check-prop-types';


const findByTestAtribute =(component, atrr)=>{
    const wrapper = component.find(`[data-test='${atrr}']`)
    return wrapper;
}

const propTypeChecking = (component, expectedProps)=>{
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                buttonStyle: 'btn-succes',
                emitEvent: () => {

                }
            };
            const propsError = propTypeChecking(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                buttonStyle: 'btn-succes',
                emitEvent: mockFunc
            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        it('Should Render a button', () => {
            const button = findByTestAtribute(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const button1 = findByTestAtribute(wrapper, 'buttonComponent');
            button1.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });


    });




});
