import React from 'react';
import { shallow } from 'enzyme';
import TableDatas from '../forms/TableDatas';

describe('render form views components tests', () => {
  it('has one instance of table data', () => {
    const props = {
      t: jest.fn(),
      node: {
        A: 'A',
        B: 'B',
        C: 'C',
      },
      points: 20,
      handlePointChange: jest.fn(),
      axis: 'x',
      index: '0',
      name: 'input',
    };
    const wrapped = shallow(<TableDatas {...props} />);
    expect(wrapped.find('div.App').length).toEqual(0);
  });
});
