import React from 'react';
import Burger from '../index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

function setup(ingredients) {
    const props = {
        ingredients: ingredients,
        removeIngredient: jest.fn(),
        notEditable: true
    };

    const enzymeWrapper = shallow(<Burger {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe('<Burger/>', ()=> {
    it('should display "Start adding ingredients" if no ingredients is passed', ()=>{
        const {enzymeWrapper} = setup([]);
        expect(enzymeWrapper.find('BurgerIngredient').length).toBe(2);
        expect(enzymeWrapper.find('p').text()).toBe('Start adding ingredients.');
    });

    it('should render self and subcomponents', ()=>{
        const {enzymeWrapper} = setup(['onio', 'meat']);
        expect(enzymeWrapper.find('BurgerIngredient').length).toBe(4);
    });
});