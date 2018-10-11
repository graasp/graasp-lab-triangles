import React from 'react';
import { shallow } from 'enzyme';
import StudentView from '../../student/StudentView';
import TeacherView from '../../teacher/TeacherView';
import App from '../../App';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a student view', () => {
  expect(wrapped.find(StudentView).length).toEqual(1);
});

it('shows a teacher view', () => {
  expect(wrapped.find(TeacherView).length).toEqual(0);
});
