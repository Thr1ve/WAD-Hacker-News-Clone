import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/Header';

const onClick = () => {};
const createOnClick = () => onClick;

describe('Header:snapshot', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Header createClickHandler={createOnClick}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
