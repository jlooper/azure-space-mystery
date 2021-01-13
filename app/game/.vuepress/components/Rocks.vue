<template>
  <div>
    <div class="m-10 p-10 rounded overflow-hidden shadow-lg">
      <p role="alert">{{ message }}</p>
      <form class="w-full max-w-sm">
        <div class="flex items-center">
          <input
            class="appearance-none focus:shadow-outline block w-full bg-white border border-gray-500 placeholder-gray-800 rounded py-3 px-4 m-2 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Code"
            aria-label="Code"
            v-model="guess"
          />
          <button
            @click="submit"
            class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <p v-if="showNext">
      <router-link to="walk">Continue</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "Rocks",

  data() {
    return {
      showNext: false,
      message: "",
      guess: "",
    };
  },
  methods: {
    submit() {
      if (this.guess == "resnet50") {
        this.message = "Well done!";
        this.showNext = true;
      } else {
        this.message = "Sorry, try again";
      }
      this.guess = "";
    },
  },
};
</script>
