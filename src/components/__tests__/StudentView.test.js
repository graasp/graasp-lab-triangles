import React from 'react';
import { shallow } from 'enzyme';
import SimulationButtons from '../common/SimulationButtons';

describe('render student view and run it components tests', () => {
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
});
