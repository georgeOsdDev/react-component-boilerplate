'use strict';
import React from 'react/addons';
import chai from 'chai';
let expect = chai.expect;
import MyComponent1 from '../../lib/components/MyComponent1';
const {TestUtils} = React.addons;

describe('Test of MyComponent1', () => {

  let component;

  beforeEach(() => {
  });

  describe('test of properties', () =>{
    it('should have default properties', function () {
      component = TestUtils.renderIntoDocument(<MyComponent1 foo='PropOfFoo'/>);
      expect(component.props.bar).to.be.eql('barbarbar');
      expect(component.props.baz).to.be.eql(false);
    });
  });

  describe('test of rendered element', () =>{
    it('should render element depends on its prop', function () {
      component = TestUtils.renderIntoDocument(<MyComponent1 foo='fffff' bar='bbbbb' baz={true}/>);
      const h1tag = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
      expect(React.findDOMNode(h1tag).textContent).to.be.eql('My Component1');

      const spanTags = TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
      expect(spanTags).have.length(2);
      expect(React.findDOMNode(spanTags[0]).textContent).to.be.eql('bbbbb');
    });
  });

  describe('test of user action', () =>{
    describe('text content will be changed by button click', () =>{
      before(() => {
        component = TestUtils.renderIntoDocument(<MyComponent1 foo='fffff' bar='bbbbb' baz={true}/>);
      });
      it('should render initial state before click', function () {
        const spanTags = TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
        expect(React.findDOMNode(spanTags[1]).textContent).to.be.eql('baz is true');
      });

      it('should change after click', function () {
        const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        TestUtils.Simulate.click(React.findDOMNode(button));
        const spanTags = TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
        expect(React.findDOMNode(spanTags[1]).textContent).to.be.eql('baz is false');
      });

      it('should not change on mouseover', function () {
        const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        TestUtils.SimulateNative.mouseOver(button);
        const spanTags = TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
        expect(React.findDOMNode(spanTags[1]).textContent).to.be.eql('baz is false');
      });
    });
  });
});
