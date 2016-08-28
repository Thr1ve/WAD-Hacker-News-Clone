import React from 'react';
import renderer from 'react-test-renderer';
import PostsList from '../../src/components/PostsList';

jest.mock('../../src/components/Post', () => 'Post');

const data = {
  '12345': {},
  '13245': {},
  '12435': {},
  '12354': undefined
}

describe('PostsList:snapshot', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <PostsList isLoading={false} data={data} visibleIds={[12345, 12435]}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when isLoading is true', () => {
    const component = renderer.create(
      <PostsList isLoading={true} data={data} visibleIds={[12345, 12435]}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a "loading" Post when there\'s no data for a given id', () => {
    const component = renderer.create(
      <PostsList isLoading={false} data={data} visibleIds={[12345, 12435, 12354]}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
