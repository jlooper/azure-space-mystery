// is on Node.js, i.e building project
if (typeof window === 'undefined') {
	console.log('is Node.js');

	const items = require('./items.json');
	const helpers = require('./helpers.json');

	global.localStorage = {
		generateUID() {},
		getLocale() {},
		setLocale() {},
		setUID() {},
		getUID() {},
		hasUID() {},
		setSessionTicket(id) {},
		getSessionTicket() {},
		setItem() {},
		getItem() {
			// we need a mocked response of all items, otherwise the build process will crash every time we add a new item
			const mockResponse = items.reduce((acc, curr) => {
				return { ...acc, [curr.id]: true };
			}, {});
			return JSON.stringify(mockResponse);
		}
	};
}

export function setSessionTicket(id) {
	localStorage.setItem('sessionTicket', id);
}

export function getSessionTicket() {
	return localStorage.getItem('sessionTicket');
}

export function generateUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export function hasUID() {
	var uid = localStorage.getItem('uid');
	if (uid != null) {
		return true;
	} else {
		return false;
	}
}

export function getLocale() {
	return localStorage.getItem('locale') || 'en';
}

export function setLocale(locale) {
	localStorage.setItem('locale', locale);
}

export function getUID() {
	return localStorage.getItem('uid');
}

export function setUID() {
	var uid = generateUID();
	localStorage.setItem('uid', uid);
}

export function hasItem(id) {
	var json = localStorage.getItem('inventory_item');
	var inv_items = JSON.parse(json);
	if (!inv_items) {
		inv_items = {};
	}
	return inv_items[id];
}

export function addItem(id) {
	var json = localStorage.getItem('inventory_item');
	var inv_items = JSON.parse(json);
	if (!inv_items) {
		inv_items = {};
	}
	inv_items[id] = true;
	localStorage.setItem('inventory_item', JSON.stringify(inv_items));
}

export function getItems() {
	var json = localStorage.getItem('inventory_item');

	var inv_items = JSON.parse(json);
	if (!inv_items) {
		inv_items = {};
	}
	var keys = Object.keys(inv_items);
	return keys;
}
