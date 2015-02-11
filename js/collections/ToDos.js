app.collections.ToDos = Backbone.Collection.extend({
	initialize: function() {
		this.add({ title: "Learn JavaScript basics" });
		this.add({ title: "Go to github.com" });
		this.add({ title: "Deve page" });
	},
	model: app.models.ToDo,
	up: function(index){
		if(index > 0) {
			var tmp = this.models[index-1];
			this.models[index-1] = this.models[index];
			this.models[index] = tmp;
			this.trigger("change");
		}
	},
	down: function(index){
		if(index < this.models.length-1){
			var tmp = this.models[index+1];
			this.models[index+1] = this.models[index];
			this.models[index] = tmp;
			this.trigger("change");
		}
	},
	archive: function(archived, index) {
		this.models[index].set("archived", archived);
	},
	changeStatus: function(done, index) {
		this.models[index].set("done", done);
	}
});