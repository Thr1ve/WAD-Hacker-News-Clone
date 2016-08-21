import React from 'react';
import renderer from 'react-test-renderer';
import ConnectedPostsList, { PostsList } from '../../src/components/PostsList';

describe('PostsList', () => {
  it('should render correctly', () => {
    const data = {
      '12345': {},
      '13245': {},
      '12435': {}
    }
    const component = renderer.create(
      <PostsList isLoading={false} data={data} visibleIds={[12345, 12435]}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
