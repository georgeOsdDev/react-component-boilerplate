'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import ReactTesuUtils from 'react-addons-test-utils';
import chai from 'chai';
let expect = chai.expect;
import MyComponent1 from '../../lib/components/MyComponent1';

describe('Test of MyComponent1', () => {

  let component;

  beforeEach(() => {
  });

  describe('test of properties', () =>{
    it('should have default properties', function () {
      component = ReactTesuUtils.renderIntoDocument(<MyComponent1 foo='PropOfFoo'/>);
      expect(component.props.bar).to.be.eql('barbarbar');
      expect(component.props.baz).to.be.eql(false);
    });
  });

  describe('test of rendered element', () =>{
    it('should render element depends on its prop', function () {
      component = ReactTesuUtils.renderIntoDocument(<MyComponent1 foo='fffff' bar='bbbbb' baz={true}/>);
      const h1tag = ReactTesuUtils.findRenderedDOMComponentWithTag(component, 'h1');
      expect(ReactDom.findDOMNode(h1tag).textContent).to.be.eql('My Component1');

      const spanTags = ReactTesuUtils.scryRenderedDOMComponentsWithTag(component, 'span');
      expect(spanTags).have.length(2);
      expect(ReactDom.findDOMNode(spanTags[0]).textContent).to.be.eql('bbbbb');
    });
  });

  describe('test of user action', () =>{
    describe('text content will be changed by button click', () =>{
      before(() => {
        component = ReactTesuUtils.renderIntoDocument(<MyComponent1 foo='fffff' bar='bbbbb' baz={true}/>);
      });
      it('should render initial state before click', function () {
        const spanTags = ReactTesuUtils.scryRenderedDOMComponentsWithTag(component, 'span');
        expect(ReactDom.findDOMNode(spanTags[1]).textContent).to.be.eql('baz is true');
      });

      it('should change after click', function () {
        const button = ReactTesuUtils.findRenderedDOMComponentWithTag(component, 'button');
        ReactTesuUtils.Simulate.click(ReactDom.findDOMNode(button));
        const spanTags = ReactTesuUtils.scryRenderedDOMComponentsWithTag(component, 'span');
        expect(ReactDom.findDOMNode(spanTags[1]).textContent).to.be.eql('baz is false');
      });

      it('should not change on mouseover', function () {
        const button = ReactTesuUtils.findRenderedDOMComponentWithTag(component, 'button');
        ReactTesuUtils.SimulateNative.mouseOver(button);
        const spanTags = ReactTesuUtils.scryRenderedDOMComponentsWithTag(component, 'span');
        expect(ReactDom.findDOMNode(spanTags[1]).textContent).to.be.eql('baz is false');
      });
    });
  });
});
