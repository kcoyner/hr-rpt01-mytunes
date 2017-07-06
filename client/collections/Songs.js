// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
      method: 'GET',
      // data: JSON.stringify(songs),
      contentType: 'application/json',
      // dataType: 'application/json',
      success: function(data) {
        context.add(data.results);
        //trigger LibraryView to render
        context.trigger('incoming');
      },
      error: function(data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('mytunes: Failed to get songs', data);
      }
    });

  }

});
