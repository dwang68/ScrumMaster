var storyCount = 0;

var Story = function () {
	storyCount++;
	this.data = {
		identifier: null,
		point: null,
		summary: null,
		description: null,
		reporter: null,
		assigner: null,
		dateOfCreation: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

	this.getInformation = function () {
		return this.data;
	};

};

exports.create = function (info) {

	var instance = new Story();
	instance.fill(info);
	return instance;
};

exports.getCount = function() {
	return storyCount;
};