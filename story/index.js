function Story(theKey, theSummary, theDescription) {
	this.key = theKey;
	this.points = [];
	this.summary = theSummary;
	this.description = theDescription;
	this.average = 0;
}

Story.prototype = {
	constructor: Story,
	getKey:function() {
		return this.key;
	},
	getPoints:function() {
		return this.points;
	},
	getSummary:function() {
		return this.summary;
	},
	getDescription:function() {
		return this.description;
	},
	getAverage:function() {
		this.average = 0;
		for(i = 0; i < this.points.length; i++){
			this.average += this.points[i];
		}
		return (this.average/this.points.length);
	},
	savePoint:function(thePointToAdd) {
		this.points.push(thePointToAdd);
	},
	showStoryInfo:function() {
		var info = this.key + ": " + this.summary + "\n  " + this.description;
		return info;
	}
}

module.exports = Story;