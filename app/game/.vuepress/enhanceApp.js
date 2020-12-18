import Page from './components/Page';
import Item from './components/Item';
import DroneLaunch from './components/DroneLaunch';
import Rocks from './components/Rocks';
import Query from './components/Query';
import Helper from './components/Helper';
export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('Item', Item);
	Vue.component('DroneLaunch', DroneLaunch);
	Vue.component('Rocks', Rocks);
	Vue.component('Query', Query);
	Vue.component('Helper', Helper);
};
