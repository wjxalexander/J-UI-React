import React from 'react';
import Dialog,{buttonsGenerate} from '../dialog';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Icon, Button} from "../../index"

Enzyme.configure({adapter: new Adapter()});

describe('Dialog', () => {
  it('renders correctly', () => {
    let visible = false;
    const fn = jest.fn(() => visible = !visible);
    const fn2 = jest.fn();
    const wrapper = shallow(<Dialog className="Dialog-test" onOk={fn2} onDismiss={fn} visible={visible}>
      <div>123</div>
    </Dialog>);
    expect(wrapper.find('.Dialog-test')).not.toExist();
    fn();
    const newWrapper = shallow(<Dialog className="Dialog-test" onOk={fn2} onDismiss={fn} visible={visible}>
      <div>123</div>
    </Dialog>);
    const defaultButton = newWrapper.find(Button)
    expect(defaultButton.length).toBe(2);
    expect(defaultButton.at(0).prop('title')).toBe('Save');
    expect(defaultButton.at(1).prop('title')).toBe('Cancel');
    defaultButton.at(0).simulate('click');
    expect(fn2).toBeCalled()
    expect(newWrapper.find('.Dialog-test')).toExist();
    expect(newWrapper.find('.j-ui-dialog-mask')).toExist();
    expect(newWrapper.find('.Dialog-test')).toMatchSnapshot();
    expect(newWrapper.prop('buttons')).toBeFalsy();
  });
  it('buttons renders correctly', () => {
    let visible = false;
    const fn = jest.fn(() => visible = !visible);

    const wrapper = mount(<Dialog className="Dialog-test" onDismiss={fn} visible={visible} buttons={[<Button buttonType="default" title="保存"/>,
      <Button onClick={fn} buttonType="custom" title="取消"/>]}>
      <div>123</div>
    </Dialog>);

    const buttonMock = buttonsGenerate([<Button buttonType="default" title="保存"/>,
      <Button onClick={fn} buttonType="custom" title="取消"/>])
    expect(buttonMock).toMatchSnapshot()
    console.log(wrapper.debug())
    expect(wrapper.prop('buttons')).toBeTruthy();
    expect(wrapper.prop('buttons').length).toBe(2);

    //
    // const defaultButton = wrapper.find(Button);
    // expect(defaultButton.at(0).prop('title')).toBe('Save');
    // expect(defaultButton.at(1).prop('title')).toBe('Cancel');
  });
  it('mask dismiss correctly', () => {
      let visible = true;
      const fn = jest.fn(() => visible = !visible);
      const wrapper = shallow(<Dialog className="Dialog-test" onDismiss={fn} visible={visible}/>);
      wrapper.find('.j-ui-dialog-mask').simulate('click');
      expect(fn).toBeCalled();
      expect(visible).toBe(false)
    }
  )
  ;
  it('X dismiss correctly', () => {
    let visible = true;
    const fn = jest.fn(() => visible = !visible);
    const wrapper = shallow(<Dialog className="Dialog-test" onDismiss={fn} visible={visible}/>);
    expect(wrapper.find('.j-ui-dialog-close')).toExist()
    wrapper.find('.j-ui-dialog-close').simulate('click');
    expect(fn).toBeCalled();
    expect(visible).toBe(false);
  });
  it('no X no mask dismiss correctly', () => {
    let visible = true;
    const fn = jest.fn(() => visible = !visible);
    const wrapper = shallow(<Dialog maskClosable={false} showCloseButton={false} className="Dialog-test"
                                    onDismiss={fn} visible={visible}/>);
    expect(wrapper.find('.j-ui-dialog-close')).not.toExist();
    wrapper.find('.j-ui-dialog-mask').simulate('click');
    expect(fn).not.toBeCalled();
  });
  it('default button correctly', () => {
    let visible = true;
    const fn = jest.fn(() => visible = !visible);
    const wrapper = mount(<Dialog className="Dialog-test" onDismiss={fn} visible={visible}/>);
    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(2);
    wrapper.find('Button[title="Cancel"]').simulate('click');
    expect(fn).toBeCalled();
    expect(visible).toBe(false);
  });
});
