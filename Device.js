"use strict";

function Device(name) {
	this.__status = false;
	this.__name = name;
}

Device.prototype.turnOff = function () {
	this.__status = false;
};

Device.prototype.turnOn = function () {
	this.__status = true;
};

Device.prototype.getStatus = function () {
	return this.__status;
};

Device.prototype.getName = function () {
	return this.__name;
};
