import renderer from 'react-test-renderer'
import Icon from "../icon"
import React from 'react'; // !!!
describe("icon test", () => {
    it("is a svg", () => {
        const tree = renderer
            .create(<Icon iconName="wechat"/>)
            .toJSON() //虚拟dom是个对象
        expect(tree).toMatchSnapshot()
    })
});
describe("icon test MSFabric", () => {
    it("is a HTML", () => {
        const tree = renderer
            .create(< Icon iconName="AdminALogo32" USEMsFabricIcon/>)
            .toJSON() //虚拟dom是个对象
        expect(tree).toMatchSnapshot()
    })
})