// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    //run playFirst
    this.on("add", function() {
      //console.log(this)
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on("dequeue", function() {
      //remove selected song
      this.remove(this.at(0));
    });

    this.on("ended", function() {
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

