// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // when song ends, assign new song to play
    this.on("ended", function() {
      //remove song that ended songQueue.at(0)
      //songQueue.at(0)
      //this.add(this.collection.at(0));
      console.log(this.collection.at(0));
      console.log(this);
      setSong(this.collection.at(0));
      // if (this.length !== 0) {
      //   //run playFirst
      //   this.playFirst();
      // }
    });
    this.render();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

