// https://github.com/facebook/jest/issues/1353#issuecomment-239735521
jest.mock('react/lib/ReactDefaultInjection');
jest.mock('react-router', () => ({ Link: 'Link' }));

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PageSelector from '../../src/components/PageSelector';

describe('PageSelector', () => {
  it('should render the correct number of page buttons on first few pages', () => {
    const wrapper = shallow(<PageSelector route="route" nPages={10} currentPage={1} />);
    const pageButtons = () => wrapper.find('ul').children('li');

    expect(pageButtons().length).toEqual(4)

    wrapper.setProps({ currentPage: 2});
    expect(pageButtons().length).toEqual(5)

    wrapper.setProps({ currentPage: 3});
    expect(pageButtons().length).toEqual(6)

    wrapper.setProps({ currentPage: 4});
    expect(pageButtons().length).toEqual(7);

    wrapper.setProps({ currentPage: 5});
    expect(pageButtons().length).toEqual(7);
  });
});

describe('PageSelector:snapshot', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <PageSelector route="route" nPages={10} currentPage={5} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
