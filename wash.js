'use strict'

var WashItem = function(text) {
	if(text) {
		var obj = JSON.parse(text);
		this.name = obj.name;
		this.wash = obj.wash;
		this.pwd = obj.pwd;
		//this.author = obj.author;
	}
};

WashItem.prototype = {
	toString: function() {
		return JSON.stringify(this)
	}
};

var WashFun = function() {
	LocalContractStorage.defineMapProperty(this, "data", {
		parse: function(text) {
			return new WashItem(text);
		},
		stringify: function(o) {
			return o.toString();
		}
	});
};

WashFun.prototype = {
	init: function() {

	},

	save: function(name, wash, pwd) {
		if(!name || !wash) {
			throw new Error("empty name or wash");
		}

		if(name.length > 20 || wash.length > 500) {
			throw new Error("name or wash  exceed limit length")
		}

		//var washItem = this.data.get(name);

		/*if(washItem) {
			throw new Error("The wash has been saved");
		}*/

		var washItem = new WashItem();
		// washItem.author = from;
		washItem.name = name;
		washItem.wash = wash;
		washItem.pwd = pwd;
		this.data.put(name, washItem);
	},

	get: function(name, pwd) {
		if(!name) {
			throw new Error("empty name");
		}
		var result = this.data.get(name);
		
		if(result.pwd) {
			if(result.pwd != pwd) {
				throw new Error("error password");
			} else {
				return result;
			}
		} else {
			return result;
		}

	}
}

module.exports = WashFun;