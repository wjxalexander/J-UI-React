import React from 'react';
import { mount} from 'enzyme';
import Button from '../button';
import renderer from 'react-test-renderer'

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button title="test" buttonType="default"/>)
      .toJSON(); //虚拟dom是个对象
    expect(tree).toMatchSnapshot()
  });
  it('renders correctly withIcon', () => {
    const tree = renderer
      .create(<Button title="test" buttonType="default" iconProps={{iconName: "accept", USEMsFabricIcon: true}}/>)
        .toJSON(); //虚拟dom是个对象
        expect(tree).toMatchSnapshot()
      });
  it('renders correctly withoutTitle', () => {
    const tree = renderer
      .create(<Button buttonType="default" iconProps={{iconName: "accept", USEMsFabricIcon: true}}/>)
      .toJSON(); //虚拟dom是个对象
    expect(tree).toMatchSnapshot()
  });
  it('renders correctly with secondaryTitle', () => {
    const tree = renderer
      .create(<Button buttonType="default" iconProps={{iconName: "accept", USEMsFabricIcon: true}} secondaryText="test1111"/>)
      .toJSON(); //虚拟dom是个对象
    expect(tree).toMatchSnapshot()
  });
  it("onClick Button", () => {
    const fakeFn = jest.fn();
    const component = mount(<Button title="test" buttonType="default" onClick={fakeFn}/>);
    component.find('button').simulate('click')
    expect(fakeFn).toBeCalled()
  });
  it("onClick Button disabled", () => {
    const fakeFn = jest.fn();
    const component = mount(<Button title="test" buttonType="default" disabled/>);
    component.find('button').simulate('click')
    expect(fakeFn).not.toBeCalled()
  });
  });
