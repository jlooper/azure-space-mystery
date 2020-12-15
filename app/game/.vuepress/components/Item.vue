<template>
  <div @click="getItem(item)">
    <p v-if="showInstructions" @click="emitResult(item)">
      {{ getDetails.instructions }}
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        aria-expanded="true"
        onclick="return false"
        @click="showResult = !showResult"
      >
        {{ getDetails.name }}
      </button>
    </p>
    <p class="font-bold" v-if="showResult">{{ getDetails.result }}</p>
  </div>
</template>
<script>
const items = require("@theme/utils/items.json");
import { addItem } from "@theme/utils";
import { emitter } from "@theme/utils/emitter";

export default {
  props: ["id"],

  computed: {
    item() {
      let item = items.find((row) => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },
    getDetails() {
      let currItem = items.find((row) => row.id == this.id);
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
      var jsonData = {};
      var columnName = item.id;
      jsonData[columnName] = item.gameItem;

      let addOk = confirm("Collect item?");
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
};
</script>
