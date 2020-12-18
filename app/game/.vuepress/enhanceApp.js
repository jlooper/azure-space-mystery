import Page from './components/Page';
import Item from './components/Item';
import DroneLaunch from './components/DroneLaunch';
import Helper from './components/Helper';
export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('Item', Item);
	Vue.component('DroneLaunch', DroneLaunch);
	Vue.component('Helper', Helper);
};
