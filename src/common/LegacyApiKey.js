var SingleEntity = require('./SingleEntity');
var StaticCollection = require('./StaticCollection');
var Branding = require('./Branding');
var Joi = require('joi');

function LegacyApiKey(id) {
  this.path = 'legacyapikey';
  this.createPath = 'legacyapikey';
  this.id = id;
  this.key = id;
  this.roles = [];
  this.roleUser = false;
  this.roleAdmin = false;
  this.roleUnsafe = false;
  this.roleSearchPrice = false;

  this.brandings = new StaticCollection({
    object: Branding
  });

  this.validSchema = function() {
    var s = {
      key: Joi.string().required().label('Key'),
      email: Joi.string().required().label(
        'Email Address'
      )
    };

    if (this.id) {
      s.secret = Joi.string().required().label(
        'Secret'
      );

      s.enabled = Joi.boolean().required().label('Enabled');
      s.blocked = Joi.boolean().required().label('Blocked');
      s.roleUser = Joi.boolean().required().label('USER role?');
      s.roleAdmin = Joi.boolean().required().label('ADMIN role?');
      s.roleUnsafe = Joi.boolean().required().label('UNSAFE_LEGACY_PASSWORD_ACTIONS role?');
      s.roleSearchPrice = Joi.boolean().required().label('OUTPUT_SEARCHPRICE role?');
      s.safeRequestsShortTermLimit = Joi.number().required().label(
        'Safe Requests Short Term Limit'
      ).description('This is the allowed number of GET requests the key can make in 10 seconds');
      s.safeRequestsMediumTermLimit = Joi.number().required().label(
        'Safe Requests Medium Term Limit'
      ).description('This is the allowed number of GET requests the key can make in 1 minute');
      s.safeRequestsLongTermLimit = Joi.number().required().label(
        'Safe Requests Long Term Limit'
      ).description('This is the allowed number of GET requests the key can make in 15 minutes');
      s.unsafeRequestsShortTermLimit = Joi.number().required().label(
        'Unsafe Requests Short Term Limit'
      ).description('This is the allowed number of POST, PUT and DELETE requests the key can make in 10 seconds');
      s.unsafeRequestsMediumTermLimit = Joi.number().required().label(
        'Unsafe Requests Medium Term Limit'
      ).description('This is the allowed number of POST, PUT and DELETE requests the key can make in 1 minute');
      s.unsafeRequestsLongTermLimit = Joi.number().required().label(
        'Unsafe Requests Long Term Limit'
      ).description('This is the allowed number of POST, PUT and DELETE requests the key can make in 15 minutes');
      s.brandings = Joi.array().required().label('Brandings');
    }

    return s;
  }.bind(this)
};

LegacyApiKey.prototype = new SingleEntity();
LegacyApiKey.prototype.mutateResponse = function(entity) {
  entity.id = entity.key;
  if (entity.roles && Object.prototype.toString(entity.roles) === '[object Object]') {
    entity.roles = Object.values(entity.roles);
  }

  if (entity.roles && entity.roles.indexOf) {
    entity.roleUser = entity.roles.indexOf('USER') >= 0;
    entity.roleAdmin = entity.roles.indexOf('ADMIN') >= 0;
    entity.roleUnsafe = entity.roles.indexOf('UNSAFE_LEGACY_PASSWORD_ACTIONS') >= 0;
    entity.roleSearchPrice = entity.roles.indexOf('OUTPUT_SEARCHPRICE') >= 0;
  }

  if (entity.brandings) {
    entity.brandings = entity.brandings.map(function(b) {
      return b.branding;
    });
  }

  return this.mutateEntity(entity);
};

LegacyApiKey.prototype.toArray = function() {
  const roles = [];
  if (this.roleUser) {
    roles.push('USER');
  }
  if (this.roleAdmin) {
    roles.push('ADMIN');
  }
  if (this.roleUnsafe) {
    roles.push('UNSAFE_LEGACY_PASSWORD_ACTIONS');
  }
  if (this.roleSearchPrice) {
    roles.push('OUTPUT_SEARCHPRICE');
  }

  const brandings = this.brandings.map(function(b) {
    return b.id;
  });

  return {
    key: this.key,
    email: this.email,
    secret: this.secret,
    enabled: this.enabled,
    blocked: this.blocked,
    safeRequestsShortTermLimit: this.safeRequestsShortTermLimit,
    safeRequestsMediumTermLimit: this.safeRequestsMediumTermLimit,
    safeRequestsLongTermLimit: this.safeRequestsLongTermLimit,
    unsafeRequestsShortTermLimit: this.unsafeRequestsShortTermLimit,
    unsafeRequestsMediumTermLimit: this.unsafeRequestsMediumTermLimit,
    unsafeRequestsLongTermLimit: this.unsafeRequestsLongTermLimit,
    brandingids: brandings.filter(function(k, i) {
      // Remove duplicates
      return brandings.indexOf(k) == i;
    }).join(','),
    roles: roles.join(',')
  };
};

LegacyApiKey.prototype.toString = function() {
  return this.key;
};

module.exports = LegacyApiKey;
