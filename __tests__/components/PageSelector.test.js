// https://github.com/facebook/jest/issues/1353#issuecomment-239735521
jest.mock('react/lib/ReactDefaultInjection');

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PageSelector from '../../src/components/PageSelector';

const noOp = () => {};
const createNoOp = () => noOp;

describe('PageSelector', () => {
  it('should call the click handler function with the correct page number', () => {
    const spy = jest.fn();
    const giveSpy = n => () => spy(n);
    const wrapper = shallow(
      <PageSelector
        nPages={10} currentPage={1}
        next={noOp} prev={noOp}
        createClickHandler={giveSpy}
      />
    );
    const findButton = n => wrapper.find('ul').children('li').at(n).find('a');

    findButton(0).simulate('click');
    findButton(1).simulate('click');
    findButton(2).simulate('click');

    expect(spy.mock.calls).toEqual([[1], [2], [3]])
  });

  it('should call the next and prev functions correctly when their buttons are clicked', () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(
      <PageSelector
        nPages={10} currentPage={1}
        next={clickHandler} prev={clickHandler}
        createClickHandler={createNoOp}
      />
    );
    const findButton = n => wrapper.find('.pagination').children('a').at(n);
    const prevButton = findButton(0);
    const nextButton = findButton(1);

    prevButton.simulate('click');
    expect(clickHandler.mock.calls.length).toEqual(1);

    nextButton.simulate('click');
    expect(clickHandler.mock.calls.length).toEqual(2);
  });

  it('should render the correct number of page buttons on first few pages', () => {
    const wrapper = shallow(
      <PageSelector
        nPages={10} currentPage={1}
        next={noOp} prev={noOp}
        createClickHandler={createNoOp}
      />
    );
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

  it('should highlight the correct page button on the first few pages', () => {
    const wrapper = shallow(
      <PageSelector
        nPages={10} currentPage={1}
        next={noOp} prev={noOp}
        createClickHandler={createNoOp}
      />
    );
    const buttonIsHighlighted = n => wrapper
      .find('ul').children('li').at(n).find('a').hasClass('is-primary');

    expect(buttonIsHighlighted(0)).toEqual(true);

    wrapper.setProps({ currentPage: 2});
    expect(buttonIsHighlighted(1)).toEqual(true);

    wrapper.setProps({ currentPage: 3});
    expect(buttonIsHighlighted(2)).toEqual(true);

    wrapper.setProps({ currentPage: 4});
    expect(buttonIsHighlighted(3)).toEqual(true);

    wrapper.setProps({ currentPage: 5});
    expect(buttonIsHighlighted(3)).toEqual(true);
  });
});

describe('PageSelector:snapshot', () => {
  it('should render correctly', () => {
    const clickHandlers = { createClickHandler: createNoOp, next: noOp, prev: noOp };
    const component = renderer.create(
      <PageSelector nPages={10} currentPage={5} {...clickHandlers}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
