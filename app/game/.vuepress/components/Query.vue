<template>
  <div class="text-center pt-10">
    <button
      type="button"
      class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="test(12)"
    >
      12
    </button>
    <button
      type="button"
      class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="test(50)"
    >
      50
    </button>
    <button
      type="button"
      class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="test(32)"
    >
      32
    </button>
    <button
      type="button"
      class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="test(45)"
    >
      45
    </button>

    <p role="alert">{{ message }}</p>
    <p v-if="showNext">
      <router-link to="wind">Continue</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "Query",

  data() {
    return {
      answer: 0,
      message: "",
      showNext: false,
    };
  },
  methods: {
    test(value) {
      if (value == 32) {
        this.message = "Well done!";
        this.showNext = true;
      } else {
        this.message = "Sorry, try again";
      }
    },
  },
};
</script>
