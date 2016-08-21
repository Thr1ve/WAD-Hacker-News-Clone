jest.unmock('../../src/components/Post');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Post from '../../src/components/Post';

describe('Post', () => {
  it('is contained within a div', () => {
    let renderer = TestUtils.createRenderer();
    let post;

    renderer.render(
      <Post post={{ url: "www.google.com", title: "google" }}/>
    );

    post = renderer.getRenderOutput();

    expect(post.type).toEqual('div');
  });
});
