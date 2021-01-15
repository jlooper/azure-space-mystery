<template>
  <div>
    <div class="m-10 text-center">
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(1)"
      >
        🌒
      </button>

      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(4)"
      >
        🌑
      </button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(5)"
      >
        🌔
      </button>

      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(7)"
      >
        🌓
      </button>
    </div>
    <span v-for="word in wordsArray">{{ word }}</span>
    <div class="text-center">
      <p role="alert" class="pb-3">{{ message }}</p>
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="test()"
      >
        Submit
      </button>
    </div>

    <p v-if="showNext">
      <router-link to="continue">Continue</router-link>
    </p>
  </div>
</template>
<script>
import { emitter } from "@theme/utils/emitter";

export default {
  name: "Buttons",

  data() {
    return {
      numbersArray: [],
      wordsArray: [],
      message: "",
      showNext: false,
    };
  },
  methods: {
    count(item) {
      this.message = "";
      //4,1,7,5
      this.numbersArray.push(item);
      console.log(item);
      let phase = "";
      if (item == 1) {
        phase = "Waxing Crescent";
      } else if (item == 4) {
        phase = "New";
      } else if (item == 5) {
        phase = "Waxing Gibbous";
      } else if (item == 7) {
        phase = "First Quarter";
      }
      this.wordsArray.push(phase + ", ");
      phase = "";
    },
    test() {
      if (JSON.stringify([4, 1, 7, 5]) === JSON.stringify(this.numbersArray)) {
        this.message = "Well done!";
        this.showNext = true;
      } else {
        this.message = "Sorry, try again";
      }
      this.numbersArray = [];
      this.wordsArray = [];
    },
  },
};
</script>
