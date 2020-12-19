<template>
  <div @click="getItem(item)">
    <p v-if="showInstructions" @click="emitResult(item)">
      {{ getLocalizedInstructions }}
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        aria-expanded="true"
        onclick="return false"
        @click="showResult = !showResult"
      >
        {{ getLocalizedName }}
      </button>
    </p>
    <p class="font-bold" v-if="showResult">{{ getLocalizedResult }}</p>
  </div>
</template>
<script>
const items = require("@theme/utils/items.json");
import messages from "@theme/translations/misc.js";
import { addItem, getLocale } from "@theme/utils";
import { emitter } from "@theme/utils/emitter";
import { i18n } from "@theme/utils/i18n";

export default {
  props: ["id"],
  i18n: {
    messages,
  },
  computed: {
    item() {
      let item = items.find((row) => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },
    getLocalizedInstructions() {
      let currItem = items.find((row) => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.instructions.es.instruction;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.instructions.pt.instruction;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.instructions.fr.instruction;
      } else {
        currItem = currItem.instructions.en.instruction;
      }
      return currItem;
    },
    getLocalizedResult() {
      let currItem = items.find((row) => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.result.es.result;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.result.pt.result;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.result.fr.result;
      } else {
        currItem = currItem.result.en.result;
      }
      return currItem;
    },
    getLocalizedName() {
      let currItem = items.find((row) => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.name.es.name;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.name.pt.name;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.name.fr.name;
      } else {
        currItem = currItem.name.en.name;
      }
      return currItem;
    },
  },
  data() {
    const item = items.find((row) => row.id == this.id);

    return {
      showInstructions: !item || item.initialHide,
      showResult: false,
    };
  },
  methods: {
    getItem(item) {
      let addOk = confirm(this.$t("collect"));
      if (addOk) {
        addItem(item.id);

        emitter.emit("item_added", item.id);

        //you got the item, so hide the prompt
        this.showInstructions = false;
      }
    },

    emitResult(item) {
      emitter.emit("showResult", item.id);
    },
  },
  created() {
    this.$i18n.locale = getLocale();
    emitter.on("lang_changed", (lang) => (this.$i18n.locale = lang));
  },
};
</script>
