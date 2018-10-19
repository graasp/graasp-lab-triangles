import React from 'react';
import { shallow } from 'enzyme';
import Tri from '../preview/Tri';

describe('render form views components tests', () => {
  it('has one instance of table data', () => {
    const props = {
      t: jest.fn(),
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
    };
    const wrapped = shallow(<Tri {...props} />);
    expect(wrapped.find('div.App').length).toEqual(0);
  });
});
