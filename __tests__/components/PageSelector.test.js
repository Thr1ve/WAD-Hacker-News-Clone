import React from 'react';
import renderer from 'react-test-renderer';
import PageSelector from '../../src/components/PageSelector';

const onClick = () => {};
const createOnClick = () => onClick;
const clickHandlers = { createClickHandler: createOnClick, next: onClick, prev: onClick };

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
