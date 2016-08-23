import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/Header';

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
