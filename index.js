'use strict'

/**
 * 
 * @param {string} sKey 
 * @param {any} mDefault 
 * @returns {any}
 */
exports.get = function(sKey, mDefault = null) {
	for (var i = 1; i <= (process.argv.length-1); i++) {
		if (process.argv[i]=="/"+sKey || process.argv[i]=="-"+sKey || process.argv[i]=="--"+sKey) {
			if (process.argv.length>=i+1) {
				return process.argv[i+1]
			}
		}
	}
	return mDefault
}

/**
 * 
 * @param {string} sKey 
 * @returns {boolean}
 */
exports.keyexists = function(sKey) {
	for (var i = 1; i <= (process.argv.length-1); i++) {
		if (process.argv[i]=="/"+sKey || process.argv[i]=="-"+sKey || process.argv[i]=="--"+sKey) {
			return true;
		}
	}
	return false;
}

/**
 * 
 * @param {any} sValue 
 * @returns {boolean}
 */
exports.valueexists = function(sValue) {
	for (var i = 1; i <= (process.argv.length-1); i++) {
		if (process.argv[i]==sValue) return true;
	}
	return false;
}

/**
 * 
 * @param {string} sKey 
 * @returns {boolean}
 */
exports.flagenabled = function(sKey) {
	var regex = new RegExp("\\+([a-zA-Z]*)"+sKey+"([a-zA-Z]*)");
	for (var i = 1; i <= (process.argv.length-1); i++) {
		if (process.argv[i].match(regex)) {
			return true;
		}
	}
	return false;
}

/**
 * 
 * @param {string} sKey 
 * @returns {boolean}
 */
exports.flagdisabled = function(sKey) {
	var regex = new RegExp("\\-([a-zA-Z]*)"+sKey+"([a-zA-Z]*)");
	for (var i = 1; i <= (process.argv.length-1); i++) {
		if (process.argv[i].match(regex)) {
			return true;
		}
	}
	return false;
}

/**
 * 
 * @param {string} sKey 
 * @returns {boolean}
 */
exports.flagexists = function(sKey) {
	var regex = new RegExp("(\\+|\\-)([a-zA-Z]*)"+sKey+"([a-zA-Z]*)");
	for (var i = 1; i <= (process.argv.length-1); i++) {
		if (process.argv[i].match(regex)) {
			return true;
		}
	}
	return false;
}

/**
 * 
 * @param {number} iIndex 
 * @param {any} mDefault 
 * @returns {any}
 */
exports.getvalbyindex = function(iIndex, mDefault = null) {
	if ((process.argv.length-1) >= iIndex) {
		return process.argv[iIndex];
	} else {
		return mDefault;
	}
}
