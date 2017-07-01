// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    var context = this;  //
    // when song ends, assign new song to play
    this.$el.on("ended", function() {
      context.model.ended();
      //console.log(this.model);
      //console.log("this is runninggg")
      //context.model.trigger('change:currentSong');
      //console.log(this.model);
      //remove song that ended songQueue.at(0)
      //songQueue.at(0)
      //this.add(this.collection.at(0));

      // console.log(this);
      //console.log(context);
      //console.log(this.model.dequeue);
      //var queue = context.model.get('songQueue')
      //console.log(context.model.get('songQueue'));
      //console.log(queue.at(0));
      // context.setSong(this.model);
      //setSong(this.collection.at(0));
      // if (context.length !== 0) {
      //   console.log(context)
      //    // this.model.playFirst();
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

