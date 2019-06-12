import renderer from 'react-test-renderer'
import Icon,{createFromIconFont} from "../icon"
import React from 'react'; // !!!
import {mount} from "enzyme"

describe("icon test", () => {
    it("is a svg", () => {
        const tree = renderer
            .create(<Icon iconName="wechat"/>)
            .toJSON() //虚拟dom是个对象
        expect(tree).toMatchSnapshot()
    })
    it("is a HTML", () => {
        const tree = renderer
            .create(< Icon iconName="AdminALogo32" USEMsFabricIcon/>)
            .toJSON() //虚拟dom是个对象
        expect(tree).toMatchSnapshot()
    });
    // renderer只用于snapshot
    it("onClick svg", () => {
        const fakeFn = jest.fn();
        const component = mount(<Icon iconName="wechat" onClick={fakeFn}/>)
        component.find('svg').simulate('click')
        expect(fakeFn).toBeCalled()
    });
    it("onClick fabric", () => {
        const fakeFn = jest.fn()
        const component = mount(<Icon iconName="AdminALogo32" USEMsFabricIcon onClick={fakeFn}/>)
        component.find('i').simulate('click')
        expect(fakeFn).toBeCalled()
    });
    it("onMouseLeave svg", () => {
        const fakeFn = jest.fn()
        const component = mount(<Icon iconName="wechat" onMouseLeave={fakeFn}/>)
        component.find('svg').simulate('mouseleave')
        expect(fakeFn).toBeCalled()
    });
    it("onMouseLeave svg", () => {
        const fakeFn = jest.fn()
        const component = mount(<Icon iconName="wechat" onMouseLeave={fakeFn}/>)
        component.find('svg').simulate('mouseleave')
        expect(fakeFn).toBeCalled()
    });
    it("onTouchCancel svg", () => {
        const fakeFn = jest.fn()
        const component = mount(<Icon iconName="wechat" onTouchCancel={fakeFn}/>);
        component.find('svg').simulate('touchcancel');
        expect(fakeFn).toBeCalled()
    });
    it("outside svg", () => {
        createFromIconFont("http://at.alicdn.com/t/font_891885_dszg7ff4by8.js")
        const tree = renderer
            .create(<Icon iconName="icon-history"/>)
            .toJSON() //虚拟dom是个对象
        expect(tree).toMatchSnapshot()
    });
    it("outside svg onTouchCancel", () => {
        createFromIconFont("http://at.alicdn.com/t/font_891885_dszg7ff4by8.js")
        const fakeFn = jest.fn()
        const component = mount(<Icon iconName="icon-history" onTouchCancel={fakeFn}/>);
        component.find('svg').simulate('touchcancel');
        expect(fakeFn).toBeCalled()
    });
});
