import React from 'react';
import { shallow } from 'enzyme';
import StudentView from '../../student/StudentView';
import Dimensions from '../forms/Dimensions';
import SimulationButtons from '../common/SimulationButtons';

describe('render student view and run it components tests', () => {
  it('has one instance of student view', () => {
    const props = {
      t: jest.fn(),
    };
    const wrapped = shallow(<StudentView {...props} />);
    expect(wrapped.find('div.App').length).toEqual(1);
  });

  it('has one instance of simulation button', () => {
    const props = {
      t: jest.fn(),
      flashed: true,
      triangles: {
        triOne: [],
        triTwo: [],
      },
    };
    const wrapped = shallow(<SimulationButtons {...props} />);
    expect(wrapped.find(SimulationButtons).length).toEqual(0);
  });

  it('has two instances of dimension', () => {
    const props = {
      t: jest.fn(),
      clax: 'class-One',
      flashed: false,
      color: 'rgb(29,103, 189)',
      node: {
        A: 'A',
        B: 'B',
        C: 'C',
      },
      triangles: [
        { x: 20, y: 50 },
        { x: 20, y: 50 },
        { x: 20, y: 50 },
      ],
      updateDimensions: jest.fn(),
    };
    const wrapped = shallow(<Dimensions {...props} />);
    expect(wrapped.find(Dimensions).length).toEqual(0);
  });
});
