<template>
  <nav
    class="nav rounded-t flex items-center justify-between flex-wrap text-end pr-0 lg:pr-5 md:pr-3 sm:pr-0 border-b"
  >
    <span class="lg:w-1/2 md:w-full sm:w-full w-full">
      <img :src="$withBase('/images/logo.png')" alt="Microsoft logo" />
    </span>

    <span class="lg:w-1/2 md:w-full sm:w-full w-full">
      <span
        class="title text-right cursor-pointer block m-1 lg:m-4 md:m-2 sm:m-1"
        @click="goHome()"
        >Azure Space Mystery</span
      >
    </span>

    <div v-on:click="openNav()" class="lg:hidden">
      <button
        class="nav-btn menu-button flex m-5 px-3 py-2 border hover:text-yellow hover:border-yellow"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Rocket</title>
          <path
            d="M22 2l-10 10h-6l-6 8c0 0 6.357-1.77 10.065-0.94l-10.065 12.94 13.184-10.255c1.839 4.208-1.184 10.255-1.184 10.255l8-6v-6l10-10 2-10-10 2z"
          ></path>
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
import Inventory from "@theme/components/Inventory.vue";

export default {
  name: "Nav",
  components: { Inventory },
  data() {
    return {
      lang: "en",
      hidden: "lg:hidden md:hidden sm:hidden hidden",
    };
  },
  methods: {
    openNav() {
      if (this.hidden == "lg:hidden md:hidden sm:hidden hidden")
        this.hidden = "p-2 block";
      else {
        this.hidden = "lg:hidden md:hidden sm:hidden hidden";
      }
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.markdown-body a {
  text-decoration: none;
}
.fill-current {
  color: white;
}
.nav-btn {
  border-color: white;
}
</style>
