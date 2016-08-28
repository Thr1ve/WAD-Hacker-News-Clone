import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/Header';

jest.mock('../../src/components/NavLink.js', () => 'NavLink');

const noOp = () => {};
const createNoOp = () => noOp;

describe('Header:snapshot', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Header createClickHandler={createNoOp}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
