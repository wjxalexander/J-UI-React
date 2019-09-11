import React from "react";
import {buttonsGenerate, alert, modal,confirm} from '../dialog';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Icon, Button} from "../../index"

Enzyme.configure({adapter: new Adapter()});

describe('alert', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(()=>{
    errorSpy.mockReset();

  })
  afterAll(() => {
    errorSpy.mockRestore();
  });
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  function $$(className) {
    return document.body.querySelectorAll(className);
  }

  it('alert render correct', () => {
    // first Modal
    alert(<div>foo</div>);
    const button = $$('.j-ui-button-default-wrapper');
    const dialog = $$(".j-ui-dialog-container")
    expect(button.length).toBe(1);
    expect(dialog.length).toBe(1);
    expect(button[0].getAttribute('title')).toBe("Confirm");//w
    expect(errorSpy).not.toHaveBeenCalled();

  })
  it('confirm render correct1', () => {
    // first Modal
    const onCancel = jest.fn();
    const onOk = jest.fn();
    confirm(<div>test</div>, onOk, onCancel)
    console.log(onOk.mock.calls)
    $$('.j-ui-button-default-wrapper')[0].click();
    expect(onCancel.mock.calls.length).toBe(0);
    expect(onOk.mock.calls.length).toBe(1);
  })
  it('confirm render correct1', () => {
    // first Modal
    const onCancel = jest.fn();
    const onOk = jest.fn();
    confirm(<div>test</div>, onOk, onCancel)
    console.log($$('.j-ui-button-default-wrapper'))
    $$('.j-ui-button-default-wrapper')[1].click();
    expect(onCancel.mock.calls.length).toBe(1);
    expect(onOk.mock.calls.length).toBe(0);
  })
});