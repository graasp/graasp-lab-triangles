import React from 'react';
import { shallow } from 'enzyme';
import SimulationButtons from '../common/SimulationButtons';

describe('render form views components tests', () => {
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
    expect(wrapped.find('div.App').length).toEqual(0);
  });
});
