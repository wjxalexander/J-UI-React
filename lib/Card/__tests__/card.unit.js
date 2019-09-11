import * as React from "react"
import {shallow,mount} from 'enzyme';
import Card from"../card";

describe("card",()=>{
  it('card snapshot',()=>{
    const wrapper = shallow(<Card title={"test"}><div>test</div></Card>)
    expect(wrapper).toMatchSnapshot()
  })
});