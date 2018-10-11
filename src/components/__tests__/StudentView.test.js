import React from 'react';
import { mount } from 'enzyme';
import StudentView from '../../student/StudentView';

let wrapped;
beforeEach(() => {
  wrapped = mount(<StudentView />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has one instance of student view', () => {
  expect(wrapped.find('h1').length).toEqual(1);
});
