<template>
  <div @click="getItem(item)">
    <p v-if="showInstructions" @click="emitResult(item)">
      {{ getInstructions }}
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        aria-expanded="true"
        onclick="return false"
        @click="showResult = !showResult"
      >
        {{ getName }}
      </button>
    </p>
    <p class="font-bold" v-if="showResult">{{ getResult }}</p>
  </div>
</template>
<script>
const items = require("@theme/utils/items.json");
import { addItem, getSessionTicket } from "@theme/utils";
import { emitter } from "@theme/utils/emitter";
import axios from "axios";
export default {
  props: ["id"],
  computed: {
    item() {
      let item = items.find((row) => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },
    getInstructions() {
      let currItem = items.find((row) => row.id == this.id);

      currItem = currItem.instructions;

      return currItem;
    },
    getResult() {
      let currItem = items.find((row) => row.id == this.id);

      currItem = currItem.result;

      return currItem;
    },
    getName() {
      let currItem = items.find((row) => row.id == this.id);

      currItem = currItem.name;

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
      let addOk = confirm("Collect item?");
      if (addOk) {
        addItem(item.id);
        this.trackClick(item.gameItem);
        emitter.emit("item_added", item.id);
        emitter.emit("test_end")
        //you got the item, so hide the prompt
        this.showInstructions = false;
      }
    },

    trackClick(item) {
      let event = "collected_item_" + item;
      axios
        .post("https://space-mystery-api.azurewebsites.net/api/logEvent", {
          sessionTicket: getSessionTicket(),
          eventName: event,
        })
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    emitResult(item) {
      emitter.emit("showResult", item.id);
    },
  },
};
</script>
