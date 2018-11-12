import React from 'react';
import { shallow } from 'enzyme';
import {
  Row,
} from 'reactstrap';
import Dimensions from '../forms/Dimensions';
import { FormViews } from '../forms/FormViews';

describe('render dimension components tests', () => {
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
    expect(wrapped.find(Row).first().hasClass('class-One'));
  });
  it('has one instance of form view', () => {
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
    expect(wrapped.find(FormViews).length).toEqual(1);
  });
});
