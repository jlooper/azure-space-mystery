<template>
  <div @click="showHelper(item)">
    <p v-if="showInstructions" @click="emitResult(item)">
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        aria-expanded="true"
        onclick="return false"
        @click="showResult = !showResult"
      >
        {{ getInstructions }}
      </button>
    </p>
    <p class="font-bold" v-if="showResult">{{ getResult }}</p>
  </div>
</template>
<script>
const helpers = require("@theme/utils/helpers.json");
import { emitter } from "@theme/utils/emitter";

import { createToastInterface } from "vue-toastification";
const toast = createToastInterface();
import "vue-toastification/dist/index.css";
import Caroline from "@theme/components/Caroline.vue";
import Hypatia from "@theme/components/Hypatia.vue";
import Mary from "@theme/components/Mary.vue";
import Raymonde from "@theme/components/Raymonde.vue";

export default {
  props: ["id"],
  components: { Caroline, Hypatia, Mary, Raymonde },
  computed: {
    item() {
      let item = helpers.find((row) => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },
    getInstructions() {
      let currItem = helpers.find((row) => row.id == this.id);

      currItem = currItem.instructions;

      return currItem;
    },
    getResult() {
      let currItem = helpers.find((row) => row.id == this.id);

      currItem = currItem.result;

      return currItem;
    },
    getName() {
      let currItem = helpers.find((row) => row.id == this.id);

      currItem = currItem.name;

      return currItem;
    },
  },
  data() {
    const item = helpers.find((row) => row.id == this.id);

    return {
      showInstructions: !item || item.initialHide,
      showResult: false,
    };
  },
  methods: {
    showHelper(item) {
      let options = {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: false,
        rtl: false,
      };
      toast(Caroline, options);
    },
    emitResult(item) {
      emitter.emit("showResult", item.id);
    },
  },
};
</script>
