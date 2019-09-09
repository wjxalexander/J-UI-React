import React from "react";
import {buttonsGenerate, alert, modal} from '../dialog';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Icon, Button} from "../../index"

Enzyme.configure({adapter: new Adapter()});

describe('alert', () => {
  // afterEach(() => {
  //   document.body.innerHTML = '';
  // });


  function $$(className) {
    return document.body.querySelectorAll(className);
  }



  it('alert render correct', () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();
    const trigger = jest.fn()
    // first Modal
    trigger();
    alert(<div>foo</div>);
    expect($$('.j-ui-button-default-wrapper').length).toBe(1);

    console.log($$('.j-ui-button-default-wrapper'))
  })
});