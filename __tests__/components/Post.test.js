import React from 'react';
import renderer from 'react-test-renderer';
import Post from '../../src/components/Post';

describe('Post:snapshot', () => {
  it('should render an object with a url and title property correctly', () => {
    const component = renderer.create(
      <Post post={{ url: "www.google.com", title: "google", text: "a popular search engine" }}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an object without a url property correctly', () => {
    const component = renderer.create(
      <Post post={{ title: "google", text: "a popular search engine" }}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
