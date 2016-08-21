import React from 'react';
import renderer from 'react-test-renderer';
import PageSelector from '../../src/components/PageSelector';

describe('PageSelector', () => {
  it('should render correctly', () => {
    const onClick = () => {};
    const createOnClick = () => onClick;
    const component = renderer.create(
      <PageSelector
          createClickHandler={createOnClick}
          next={onClick}
          prev={onClick}
          nPages={10}
          currentPage={2}
      />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
