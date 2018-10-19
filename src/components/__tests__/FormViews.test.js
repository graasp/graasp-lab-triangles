import React from 'react';
import { shallow } from 'enzyme';
import FormViews from '../forms/FormViews';
import TableDatas from '../forms/TableDatas';

describe('render form views components tests', () => {
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
    expect(wrapped.find('div.class-One').length).toEqual(0);
  });
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
