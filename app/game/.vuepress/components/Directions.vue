<template>
  <div>
    <div class="m-10 text-center">
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="go('up')"
      >
        👆
      </button>

      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="go('right')"
      >
        👉
      </button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="go('down')"
      >
        👇
      </button>

      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="go('left')"
      >
        👈
      </button>
    </div>
    <div class="text-center">
      <p role="alert" class="pb-3">{{ message }}</p>
    </div>
    <p v-if="showNext">
      <router-link to="float">Continue</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "Directions",

  data() {
    return {
      message: "",
      showNext: false,
    };
  },
  methods: {
    go(direction) {
      if (direction == "down") {
        this.message = "Well done!";
        this.showNext = true;
      } else {
        this.message = "Sorry, try again";
      }
    },
  },
};
</script>
