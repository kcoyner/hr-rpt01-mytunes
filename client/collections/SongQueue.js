// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);

    this.on('dequeue', this.dequeue, this);

    this.on('ended', this.playNext, this);
  },

  enqueue: function (song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function (song) {
  },

  playNext: function () {
  },

  playFirst: function() {
    //plays the first song in the queue songQueue.at(0)
    this.at(0).play();
  },
});
