import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/Header';

describe('Header', () => {
  it('should render correctly', () => {
    const onClick = () => {};
    const createOnClick = () => onClick;
    const component = renderer.create(
      <Header createClickHandler={createOnClick}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
