import React from 'react';
import { shallow } from 'enzyme';
import Dimensions from '../forms/Dimensions';
import FormViews from '../forms/FormViews';

describe('render student view and run it componets tests', () => {
  it('has one instance of dimension', () => {
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
    expect(wrapped.find('div.class-One').length).toEqual(1);
  });
  it('has one instance of form view', () => {
    const props = {
      t: jest.fn(),
      handlePChange: jest.fn(),
      node: {
        A: 'A',
        B: 'B',
        C: 'C',
      },
      points: [
        { x: 20, y: 50 },
        { x: 20, y: 50 },
        { x: 20, y: 50 },
      ],
    };
    const wrapped = shallow(<FormViews {...props} />);
    expect(wrapped.find('div.App').length).toEqual(0);
  });

});
