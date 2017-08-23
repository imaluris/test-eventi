/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    artista: {
      type: 'string',
      required: true
    },
    luogo: {
      type: 'string',
      required: true,
    },
    data: {
      type: 'date',
      required: true,
    },
    prezzo: {
      type: 'float',
      required: true
    }
  }

};
