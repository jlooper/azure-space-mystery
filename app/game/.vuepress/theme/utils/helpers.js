// is on Node.js, i.e building project

if (typeof window === 'undefined') {
	console.log('is Node.js');

	const items = require('./items.json');

	global.localStorage = {
		setItem() {},
		getItem() {
			// we need a mocked response of all items, otherwise the build process will crash every time we add a new item
			const mockResponse = items.reduce((acc, curr) => {
				return { ...acc, [curr.id]: true };
			}, {});
			return JSON.stringify(mockResponse);
		},
	};
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
