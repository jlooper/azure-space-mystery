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
      <router-link to="continue">{{ $t("continue") }}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/misc.js";
import { getLocale } from "@theme/utils/helpers";
import { emitter } from "@theme/utils/emitter";

export default {
  name: "Query",
  i18n: {
    messages,
  },
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
        this.message = this.$t("pass");
        this.showNext = true;
      } else {
        this.message = this.$t("fail");
      }
    },
    created() {
      this.$i18n.locale = getLocale();
      emitter.on("lang_changed", (lang) => {
        this.$i18n.locale = lang;
      });
    },
  },
};
</script>
