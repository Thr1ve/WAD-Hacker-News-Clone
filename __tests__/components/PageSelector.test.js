// https://github.com/facebook/jest/issues/1353#issuecomment-239735521
jest.mock('react/lib/ReactDefaultInjection');

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PageSelector from '../../src/components/PageSelector';

const onClick = () => {};
const createOnClick = () => onClick;
const clickHandlers = { createClickHandler: createOnClick, next: onClick, prev: onClick };

describe('PageSelector', () => {
  it('should call the click handler function with the correct page number', () => {
    let lastClicked;
    const createUpdateLastClicked = n => () => lastClicked = n;
    const wrapper = shallow(
      <PageSelector
        nPages={10} currentPage={1}
        next={onClick} prev={onClick}
        createClickHandler={createUpdateLastClicked}
      />
    );
    const findButton = n => wrapper.find('ul').children('li').at(n).find('a');

    findButton(0).simulate('click');
    expect(lastClicked).toEqual(1);

    findButton(1).simulate('click');
    expect(lastClicked).toEqual(2);

    findButton(2).simulate('click');
    expect(lastClicked).toEqual(3);
  });
});

describe('PageSelector:snapshot', () => {
  it('should render correctly on page 1', () => {
    const component = renderer.create(
      <PageSelector nPages={10} currentPage={1} {...clickHandlers}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on page 2', () => {
    const component = renderer.create(
      <PageSelector nPages={10} currentPage={2} {...clickHandlers}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on page 3', () => {
    const component = renderer.create(
      <PageSelector nPages={10} currentPage={3} {...clickHandlers}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on page 4', () => {
    const component = renderer.create(
      <PageSelector nPages={10} currentPage={4} {...clickHandlers}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on page 5', () => {
    const component = renderer.create(
      <PageSelector nPages={10} currentPage={5} {...clickHandlers}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
