// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // adds a song to the SongQueue collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // removes a song from the SongQueue collection
    this.trigger('dequeue', this);
  },

  ended: function() {
    // triggers an ended event
    this.trigger('ended', this);
  }

});
