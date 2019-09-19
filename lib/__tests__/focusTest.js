import React from "react";
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

function focusTest(Component) {
  describe('focus and blur', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

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
//NOTE: With React 16 and above, instance() returns null for stateless functional components.
    it('focus() and onFocus', () => {
      const handleFocus = jest.fn();
      const wrapper = mount(<Component onFocus={handleFocus}/>, {attachTo: container});
      console.log(Component);
      wrapper.simulate('focus');
      jest.runAllTimers();
      expect(handleFocus).toHaveBeenCalled();
    });

    it('blur() and onBlur', () => {
      const handleBlur = jest.fn();
      const wrapper = mount(<Component onBlur={handleBlur}/>, {attachTo: container});
      wrapper.focus();
      jest.runAllTimers();
      wrapper.instance().blur();
      jest.runAllTimers();
      expect(handleBlur).toHaveBeenCalled();
    });

    it('autoFocus', () => {
      const handleFocus = jest.fn();
      mount(<Component autoFocus onFocus={handleFocus}/>, {attachTo: container});
      jest.runAllTimers();
      expect(handleFocus).toHaveBeenCalled();
    });
});
}
export default focusTest