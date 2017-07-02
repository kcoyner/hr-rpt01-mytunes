// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    var context = this;
    this.render();

    this.collection.on('click', function() {
      console.log("This is running!");
      context.render();
    })
  },

  // events: {

  //   'click': function() {
  //     // this.model.enqueue();
  //     this.render();
  //   }

  // },

  // render: function() {
  //   return this.$el;
  // }

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

