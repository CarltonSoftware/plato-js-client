var FilterCollection = require('./FilterCollection')

/**
 * Note Filter collection object.  Extends the FilterCollection object.
 *
 */
function NoteFilterCollection(options) {
  FilterCollection.apply(this, arguments);
  this.noteEntity = options.noteEntity;

  /**
   * Get the filter path.
   *
   * Currently using this method as the client would need an interceptor
   * to create the array notation for the grouped filters.
   *
   * This way seemed simpler at the moment.
   *
   * @return {String}
   */
  this.getFilterPath = function() {
    var path = this.noteEntity.getUpdatePath() + '/note?page=' + this.page + '&limit=' + this.limit + this.getFilterString();
    if (this.orderBy) {
      path += '&orderBy=' + this.orderBy;
    }
    return path;
  };

  /**
   * Return the notes for this collection from the
   * entity notes
   *
   * @return {Array}
   */
  this.getNotes = function() {
    var notes = [];
    this.collection.forEach(function(entityNote) {
      notes.push(entityNote.note);
    });

    return notes;
  }
}

NoteFilterCollection.prototype = new FilterCollection();

module.exports = NoteFilterCollection;
