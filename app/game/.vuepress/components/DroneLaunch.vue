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
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(2)"
      >
        🌕
      </button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(3)"
      >
        🌖
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
        @click="count(6)"
      >
        🌘
      </button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(7)"
      >
        🌓
      </button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(8)"
      >
        🌗
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
        {{ $t("try") }}
      </button>
    </div>

    <p v-if="showNext">
      <router-link to="continue">{{ $t("continue") }}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/misc.js";
import { getLocale } from "@theme/utils";
import { emitter } from "@theme/utils/emitter";

export default {
  name: "Buttons",
  i18n: {
    messages,
  },
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
      //2,3,8,6,4,1,7,5
      //proper order is full, waning gibbous, third quarter, waning crescent, new, waxing crescent, first quarter, waxing gibbous
      this.numbersArray.push(item);
      console.log(item);
      let phase = "";
      if (item == 1) {
        phase = this.$t("waxingcrescent");
      } else if (item == 2) {
        phase = this.$t("full");
      } else if (item == 3) {
        phase = this.$t("waninggibbous");
      } else if (item == 4) {
        phase = this.$t("new");
      } else if (item == 5) {
        phase = this.$t("waxinggibbous");
      } else if (item == 6) {
        phase = this.$t("waningcrescent");
      } else if (item == 7) {
        phase = this.$t("firstquarter");
      } else if (item == 8) {
        phase = this.$t("thirdquarter");
      }
      this.wordsArray.push(phase + ", ");
      phase = "";
    },
    test() {
      if (
        JSON.stringify([2, 3, 8, 6, 4, 1, 7, 5]) ===
        JSON.stringify(this.numbersArray)
      ) {
        this.message = this.$t("pass");
        this.showNext = true;
      } else {
        this.message = this.$t("fail");
      }
      this.numbersArray = [];
      this.wordsArray = [];
    },
  },
  created() {
    this.$i18n.locale = getLocale();
    emitter.on("lang_changed", (lang) => {
      this.$i18n.locale = lang;
    });
  },
};
</script>
