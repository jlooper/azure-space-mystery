<template>
	<nav
		class="nav rounded-t flex items-center justify-between flex-wrap text-right pr-0 lg:pr-5 md:pr-3 sm:pr-0 border-b"
	>
		<span class="lg:w-1/2 md:w-full sm:w-full w-full">
			<!---a good place for a logo--->
		</span>

		<span class="lg:w-1/2 md:w-full sm:w-full w-full">
			<span class="title cursor-pointer block m-1 lg:m-4 md:m-2 sm:m-1" @click="goHome()">SpaceQuest</span>
		</span>

		<div v-on:click="openNav()" class="lg:hidden">
			<button class="menu-button text-white flex m-5 px-3 py-2 border hover:text-yellow hover:border-yellow">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Inventory</title>
					<path
						d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
					/>
				</svg>
			</button>
		</div>

		<div class="w-full block justify-end lg:flex lg:w-auto">
			<div class="nav-text text-med lg:flex-grow">
				<span :class="hidden">
					<Inventory />
				</span>
			</div>
		</div>
	</nav>
</template>

<script>
import Inventory from '@theme/components/Inventory.vue';

export default {
	name: 'Nav',
	components: { Inventory },
	data() {
		return {
			lang: 'en',
			hidden: 'lg:hidden md:hidden sm:hidden hidden',
		};
	},
	methods: {
		openNav() {
			if (this.hidden == 'lg:hidden md:hidden sm:hidden hidden') this.hidden = 'p-2 block';
			else {
				this.hidden = 'lg:hidden md:hidden sm:hidden hidden';
			}
		},
		goHome() {
			this.$router.push({ path: '/' });
		},
	},
};
</script>

<style scoped>
.markdown-body a {
	text-decoration: none;
}
</style>
