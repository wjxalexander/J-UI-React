import React from 'react';
import Dialog from '../dialog';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Icon, Button} from "../../index"
Enzyme.configure({ adapter: new Adapter() });

describe('Dialog', () => {
  it('renders correctly', () => {
    let visible = false;
    const fn = jest.fn(()=>visible=!visible);
    const wrapper = shallow(<Dialog className="Dialog-test" onDismiss={fn} visible={visible} /> );
    expect(wrapper.find('.Dialog-test')).not.toExist();
    fn();
    const newWrapper = shallow(<Dialog className="Dialog-test" onDismiss={fn} visible={visible} /> );
    expect(newWrapper.find('.Dialog-test')).toExist();
    expect(newWrapper.find('.j-ui-dialog-mask')).toExist();
    expect(newWrapper.find('.Dialog-test')).toMatchSnapshot();
  });
  it('mask dismiss correctly', () => {
    let visible = true;
    const fn = jest.fn(()=>visible=!visible);
    const wrapper = shallow(<Dialog className="Dialog-test" onDismiss={fn} visible={visible} /> );
    wrapper.find('.j-ui-dialog-mask').simulate('click');
    expect(fn).toBeCalled();
    expect(visible).toBe(false)
  });
  it('X dismiss correctly', () => {
    let visible = true;
    const fn = jest.fn(()=>visible=!visible);
    const wrapper = shallow(<Dialog className="Dialog-test" onDismiss={fn} visible={visible} /> );
    expect(wrapper.find('.j-ui-dialog-close')).toExist()
    wrapper.find('.j-ui-dialog-close').simulate('click');
    expect(fn).toBeCalled();
    expect(visible).toBe(false);
  });
  it('default button correctly', () => {
    let visible = true;
    const fn = jest.fn(()=>visible=!visible);
    const wrapper = mount(<Dialog className="Dialog-test" onDismiss={fn} visible={visible} /> );
    const buttons = wrapper.find(Button);
    console.log(buttons.debug());
    console.log(wrapper.debug())
    expect(buttons.length).toBe(2);
    wrapper.find('Button[title="Cancel"]').simulate('click');
    expect(fn).toBeCalled();
    expect(visible).toBe(false);
  });
});
