import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};
test("renders learn react link", () => {
  const wrapper = setup();
});

test("initial state of button to be 0", () => {
  const wrapper = setup();
  const displayedCounterDetails = wrapper.state("count");
  expect(displayedCounterDetails).toBe(0);
});

test("text been displayed with the counter ", () => {
  const wrapper = setup();
  const h1Text = findByTestAttr(wrapper, "counter-text");
  expect(h1Text.text()).toContain(0);
});

test("onClick of increment button value should be incremented by 1", () => {
  const wrapper = setup();
  wrapper.setState({ count: 1 });
  const button = findByTestAttr(wrapper, "increment-btn");
  button.simulate("click");
  const h1Text = findByTestAttr(wrapper, "counter-text");
  expect(h1Text.text()).toContain(2);
  expect(wrapper.state("count")).toBe(2);
  console.log("wrapper.state.count", wrapper.state("count"));
});

test("Test if the no is decremented", () => {
  const wrapper = setup(<App />);
  wrapper.setState({ count: 10 });
  const decrementButton = findByTestAttr(wrapper, "decrement-btn");
  decrementButton.simulate("click");
  const h1Text = findByTestAttr(wrapper, "counter-text");
  expect(h1Text.text()).toContain(9);
  expect(wrapper.state("count")).toBe(9);
});

test("validate error been shown when state is 0 and decrement been clicked", () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ count: 0, enableError: false });
  const button = findByTestAttr(wrapper, "decrement-btn");
  button.simulate("click");
  const negativeError = findByTestAttr(wrapper, "negative-error");
  expect(negativeError.text()).toBeTruthy();
});

test("onClick of increment button value should be incremented by 1 and error to be removed", () => {
  const wrapper = setup();
  wrapper.setState({ count: 0, enableError: true });
  const h1Error = findByTestAttr(wrapper, "negative-error");
  expect(h1Error.text()).toBeTruthy();
  const button = findByTestAttr(wrapper, "increment-btn");
  button.simulate("click");
  const h1Text = findByTestAttr(wrapper, "counter-text");
  expect(h1Text.text()).toContain(1);
  expect(wrapper.state("count")).toBe(1);
  const negativeError = findByTestAttr(wrapper, "negative-error");
  expect(wrapper.state("enableError")).toBeFalsy();
});
