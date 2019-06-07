import renderer from 'react-test-renderer'
import Icon from "../icon"
import React from 'react'; // !!!
describe("只接受string",()=>{
    it("只接受string",()=>{
        const  result = createFromIconFont('a')
        expect(result).toBe(HTMLElement)

    })
})