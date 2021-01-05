<template>
  <div>
    <div class="m-10 p-10 rounded overflow-hidden shadow-lg">
      <p role="alert">{{ message }}</p>
      <form class="w-full max-w-sm">
        <div class="flex items-center">
          <input
            class="appearance-none focus:shadow-outline block w-full bg-white border border-gray-500 placeholder-gray-800 rounded py-3 px-4 m-2 leading-tight focus:outline-none focus:bg-white"
            type="text"
            :placeholder="$t('code')"
            :aria-label="$t('code')"
            v-model="guess"
          />
          <button
            @click="submit"
            class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
          >
            {{ $t("try") }}
          </button>
        </div>
      </form>
    </div>
    <p v-if="showNext">
      <router-link to="walk">{{ $t("continue") }}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/misc.js";
import { getLocale } from "@theme/utils";
import { emitter } from "@theme/utils/emitter";

export default {
  name: "Rocks",
  i18n: {
    messages,
  },
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
        this.message = this.$t("pass");
        this.showNext = true;
      } else {
        this.message = this.$t("fail");
      }
      this.guess = "";
    },
  },
  created() {
    this.$i18n.locale = getLocale();
    emitter.on("lang_changed", (lang) => (this.$i18n.locale = lang));
  },
};
</script>
