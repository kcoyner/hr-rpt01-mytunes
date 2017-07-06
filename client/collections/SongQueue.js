// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      console.log('add a song to the songqueue');
      console.log('this: ', this);
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('enqueue', function() {
      //add selected song
      this.add(this.at(0));
    });

    this.on('dequeue', function() {
      //remove selected song
      this.remove(this.at(0));
    });

    this.on('ended', function() {
      //remove song that ended songQueue.at(0)
      //songQueue.at(0)
      this.remove(this.at(0));
      if (this.length !== 0) {
        //run playFirst
        this.playFirst();
      }
    });

  },

  playFirst: function() {
    //plays the first song in the queue songQueue.at(0)
    this.at(0).play();
  },



});
