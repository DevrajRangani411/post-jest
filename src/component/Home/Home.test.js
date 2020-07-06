import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';

import Home from "./index";


// const setAp =(props={}) =>{
//     const component = shallow(<Home {...props}/>);
//     return component;
// }

// const findByTestAtribute =(component, atrr)=>{
//     const wrapper = component.find(`[data-test='${atrr}']`)
//     return wrapper;
// }

describe('Header Component',()=>{

    // let component;
    // beforeEach(()=>{
    //     component= setAp();
    // });

    

    it('Should render without errors',()=>{
        // const wrapper = findByTestAtribute(component,"header")
        // expect(wrapper.length).toBe(1);
    })

    it('Should render Logo',()=>{
       
    })

})