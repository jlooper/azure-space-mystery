<template>
	<div class="wrapper">
		<div class="markdown-body font-serif bg-white m-2 sm:m-3 md:m-6 lg:m-12 text-lg rounded-lg">
			<Nav />
			<div
				role="banner"
				v-if="hasBackdrop"
				:style="{ backgroundImage: 'url(' + hasBackdrop + ')' }"
				class="w-full image backdrop"
			>
				&nbsp;
			</div>
			<div class="flex mb-4">
				<div v-if="!fullScreenLayout" role="complementary" :class="hidden">
					<component :is="inventory"></component>
				</div>
				<div role="main" class="w-full">
					<component :is="layout"></component>
				</div>
			</div>

			<Footer />
		</div>
	</div>
</template>
<script>
import Nav from '@theme/components/Nav.vue';
import BasicLayout from '@theme/layouts/BasicLayout.vue';
import Inventory from '@theme/components/Inventory.vue';

export default {
	components: {
		Nav,
		BasicLayout,
		Inventory,
	},
	data() {
		return {
			hidden: 'lg:inline-block md:hidden sm:hidden hidden w-1/2',
		};
	},
	computed: {
		layout() {
			return this.$page.frontmatter.layout || 'BasicLayout';
		},
		inventory() {
			return this.$page.frontmatter.inventory || 'Inventory';
		},
		hasBackdrop() {
			return this.$page.frontmatter.backdrop || false;
		},
		fullScreenLayout() {
			return this.$page.frontmatter.fullScreenLayout || false;
		},
	},
};
</script>

<style scoped>
.backdrop {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
}
</style>
