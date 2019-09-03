import React from 'react';
import Dialog from '../dialog';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

describe('Dialog', () => {
  it('renders correctly', () => {
    let visible = true
    const fn = jest.fn(()=>visible=false);
    const wrapper = shallow(<Dialog className="Dialog-test" onDismiss={fn} visible={true} /> );
    console.log(wrapper.debug())
    expect(wrapper.find('.Dialog-test')).toExist()
    expect(wrapper.find('.Dialog-test')).toHaveClassName("Dialog-test")
  });

});
