import React from 'react';
import { shallow } from 'enzyme';
import Header from "./index";

import checkPropTypes from 'check-prop-types';

const setAp =(props={}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
}

const findByTestAtribute =(component, atrr)=>{
    const wrapper = component.find(`[data-test='${atrr}']`)
    return wrapper;
}

const propTypeChecking = (component, expectedProps)=>{
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

describe('Header Component',()=>{


    describe('Check Ptop Type',()=>{

        it('Should not throw warning',()=>{
            const expectedProps = {
                logo: 'Test'
            }

            //Check Props type
            const propsErr = propTypeChecking(Header, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    let component;
    beforeEach(()=>{
        component= setAp();
    });

    it('Should render without errors',()=>{
        const wrapper = findByTestAtribute(component,"header")
        expect(wrapper.length).toBe(1);
    })

    it('Should render Logo',()=>{
        const logo = findByTestAtribute(component,"logo")
        expect(logo.length).toBe(1);
    })

    

})