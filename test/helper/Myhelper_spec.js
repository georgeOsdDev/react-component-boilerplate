'use strict';
import chai from 'chai';
let expect = chai.expect;
import MyHelper from '../../lib/helper/MyHelper';

describe('Test of MyHelper', () => {

  describe('utils offer helpFunc', () => {
    it('return argument', (done) => {
      let src = 'src';
      let result = MyHelper.helpFunc(src);
      expect(result).to.be.eql(src);
      done();
    });
  });
});
