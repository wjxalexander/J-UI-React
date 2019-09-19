import React from "react";
import Input from '../input';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {Icon, Button} from "../../index"
import focusTest from "../../__tests__/focusTest"

Enzyme.configure({adapter: new Adapter()});
describe("render input Proper",()=>{
  // focusTest(Input);
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });
  it("mount correct",()=>{
    const input = mount(<Input />);
    expect(input).toMatchSnapshot()
  });
  it('focus() and onFocus', () => {
    const handleFocus = jest.fn();
    const wrapper = mount(<Input onFocus={handleFocus}/>, {attachTo: container});
    expect(wrapper.prop('onFocus')).toBeTruthy();
    // console.log(wrapper.debug());
    wrapper.find('input').simulate('focus');
    expect(handleFocus).toHaveBeenCalled();
  });
  it('blur() and onBlur', () => {
    const handleBlur = jest.fn();
    const wrapper = mount(<Input onBlur={handleBlur}/>, {attachTo: container});
    expect(wrapper.prop('onBlur')).toBeTruthy();
    wrapper.find('input').simulate('blur');
    expect(handleBlur).toHaveBeenCalled();
  });
  it('autoFocus', () => {
    const handleFocus = jest.fn();
    mount(<Input autoFocus onFocus={handleFocus}/>, {attachTo: container});
    // jest.runAllTimers();
    expect(handleFocus).toHaveBeenCalled();
  });
  it('should support maxLength', () => {
    const wrapper = mount(<Input maxLength={3} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should support Icons', () => {

    const wrapper = mount(<Input maxLength={3} iconProps={{iconName:"Calendar",USEMsFabricIcon:true}} />);
    expect(wrapper).toMatchSnapshot();
  });
})