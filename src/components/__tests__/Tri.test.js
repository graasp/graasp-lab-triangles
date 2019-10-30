import React from 'react';
import { shallow } from 'enzyme';
import Tri from '../preview/Tri';

describe('render form views components tests', () => {
  it('has one instance of table data', () => {
    const props = {
      t: jest.fn(),
      handleDragMove: jest.fn(),
      handleDragMoveOne: jest.fn(),
      handleDragMoveThree: jest.fn(),
      checkBoundaries: jest.fn(),
      handleDragMoveTwo: jest.fn(),
      handleMouseEnter: jest.fn(),
      handleMouseLeave: jest.fn(),
      color: 'rgb(232, 240, 249)',
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
      radiusOne: 2,
      radiusTwo: 2,
      radiusThree: 2,
      stroke: 'rgb(232, 240, 249)',
      strokeOne: 'rgb(232, 240, 249)',
      strokeTwo: 'rgb(232, 240, 249)',
      strokeThree: 'rgb(232, 240, 249)',
      strokeWidthOne: 2,
      strokeWidthTwo: 2,
      strokeWidthThree: 2,
    };
    const wrapped = shallow(<Tri {...props} />);
    expect(wrapped.find('div.App').length).toEqual(0);
  });
});
