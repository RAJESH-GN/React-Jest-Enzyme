import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
});

test("Component is not hidden or shown", () => {
  const wrapper = shallow(<App />);
  //expect(wrapper.find("[data-test='testsample']").length).toBe;
  expect(wrapper.find("[data-test='testsample']").length).toBe(1);
});
