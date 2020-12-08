import Page from './components/Page';
import Item from './components/Item';
import Helper from './components/Helper';
export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('Item', Item);
	Vue.component('Helper', Helper);
};
