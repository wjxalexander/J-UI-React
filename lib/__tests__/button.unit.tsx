import renderer from 'react-test-renderer'
import Button from "../button"
import React from 'react'; // !!!
describe("button test",()=>{
    it("is a div",()=>{
        const tree = renderer
            .create(<Button/>)
            .toJSON() //虚拟dom是个对象
        expect(tree).toMatchSnapshot()
    })
})