window.Plugin = Backbone.Model.extend({
	defaults: {
	  type: "plugins",
	  name: "Plugin"
	},
	url: function() {
  	 return '/dashboard/#/' + this.get('type') + '/' + this.id;
	},
	fetch: function () {
	  this.set({
	    navItems: [{
  	    link: this.url() + "/create",
  	    name: "create"
  	  }]
	  });
	}	
});

window.Plugins = Backbone.Collection.extend({
  model: Plugin,
  parse: function (response) {
    for (var i = 0,iLength = response['results'].length; i<iLength; i++) {
      response['results'][i].id = response['results'][i]._id;
    }
    return response['results'];
  },
  url: "/plugins"
});