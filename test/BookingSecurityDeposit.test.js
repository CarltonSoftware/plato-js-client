var chai = require('chai');
var expect = chai.expect;
var Joi = require('joi');
var validSchema = require('../').common.BookingSecurityDeposit.prototype.validSchema;

describe('BookingSecurityDeposit', function() {
  describe('#validSchema', function() {
    it('should allow ownerchargecode to be missing if ownerchargeamount is missing', function() {
      expect(Joi.validate({
        amount: 50,
        dueindate: '2016-05-05',
        dueoutdate: '2016-06-03',
      })).to.deep.equal({
        error: null,
        value: {
          amount: 50,
          dueindate: '2016-05-05',
          dueoutdate: '2016-06-03',
        }
      });
    });

    it('should allow ownerchargecode to be missing if ownerchargeamount is blank', function() {
      expect(Joi.validate({
        amount: 50,
        dueindate: '2016-05-05',
        dueoutdate: '2016-06-03',
        ownerchargeamount: '',
      }, validSchema)).to.deep.equal({
        error: null,
        value: {
          amount: 50,
          dueindate: '2016-05-05',
          dueoutdate: '2016-06-03',
        }
      });
    });

    it('should require ownerchargecode if ownerchargeamount is set', function() {
      expect(Joi.validate({
        amount: 50,
        dueindate: '2016-05-05',
        dueoutdate: '2016-06-03',
        ownerchargeamount: '66',
      }, validSchema).error.message).to.equal('child "Owner Charge Code" fails because ["ownerchargecode" is required]');

      expect(Joi.validate({
        amount: 50,
        dueindate: '2016-05-05',
        dueoutdate: '2016-06-03',
        ownerchargeamount: 2,
      }, validSchema).error.message).to.equal('child "Owner Charge Code" fails because ["ownerchargecode" is required]');

      expect(Joi.validate({
        amount: 50,
        dueindate: '2016-05-05',
        dueoutdate: '2016-06-03',
        ownerchargeamount: 2,
        ownerchargecode: {
          id: 1
        }
      }, validSchema).error).to.be.null;
    });
  });
});
