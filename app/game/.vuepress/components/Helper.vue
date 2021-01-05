<template>
  <div class="text-center">
    <button
      type="button"
      class="bg-transparent mt-5 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      aria-expanded="true"
      @click="
        showResult = !showResult;
        togglePopover(item);
      "
    >
      {{ getLocalizedInstructions }}
    </button>
    <div
      class="m-3 p-3 shadow-2xl rounded-lg border-solid border-2 border-light-gray"
      ref="popoverRef"
      v-bind:class="{ hidden: !popoverShow, block: popoverShow }"
    >
      <span v-if="getDetails.name == 'Mary'"><Mary /></span>

      <span v-if="getDetails.name == 'Caroline'"><Caroline /></span>

      <span v-if="getDetails.name == 'Hypatia'"><Hypatia /></span>

      <span v-if="getDetails.name == 'Raymonde'"><Raymonde /></span>

      <em class="font-thin"
        ><a :href="getDetails.link" target="_blank">{{
          getLocalizedLearn
        }}</a></em
      >

      <p class="font-bold" v-if="showResult">{{ getLocalizedResult }}</p>
    </div>
  </div>
</template>
<script>
const helpers = require("@theme/utils/helpers.json");
import { getSessionTicket } from "@theme/utils";
import { emitter } from "@theme/utils/emitter";
import Caroline from "@theme/components/Caroline.vue";
import Hypatia from "@theme/components/Hypatia.vue";
import Mary from "@theme/components/Mary.vue";
import Raymonde from "@theme/components/Raymonde.vue";
import axios from "axios";
export default {
  props: ["id"],
  components: {
    Caroline,
    Hypatia,
    Mary,
    Raymonde,
  },
  computed: {
    item() {
      let item = helpers.find((row) => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },
    getLocalizedInstructions() {
      let currItem = helpers.find((row) => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.instructions.es.instruction;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.instructions.pt.instruction;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.instructions.fr.instruction;
      } else if (this.$i18n.locale == "ar") {
        currItem = currItem.instructions.ar.instruction;
      } else if (this.$i18n.locale == "de") {
        currItem = currItem.instructions.de.instruction;
      } else if (this.$i18n.locale == "he") {
        currItem = currItem.instructions.he.instruction;
      } else if (this.$i18n.locale == "it") {
        currItem = currItem.instructions.it.instruction;
      } else if (this.$i18n.locale == "tr") {
        currItem = currItem.instructions.tr.instruction;
      } else if (this.$i18n.locale == "ja") {
        currItem = currItem.instructions.ja.instruction;
      } else if (this.$i18n.locale == "zh") {
        currItem = currItem.instructions.zh.instruction;
      } else {
        currItem = currItem.instructions.en.instruction;
      }
      return currItem;
    },
    getLocalizedResult() {
      let currItem = helpers.find((row) => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.result.es.result;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.result.pt.result;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.result.fr.result;
      } else if (this.$i18n.locale == "ar") {
        currItem = currItem.result.ar.result;
      } else if (this.$i18n.locale == "de") {
        currItem = currItem.result.de.result;
      } else if (this.$i18n.locale == "he") {
        currItem = currItem.result.he.result;
      } else if (this.$i18n.locale == "it") {
        currItem = currItem.result.it.result;
      } else if (this.$i18n.locale == "tr") {
        currItem = currItem.result.tr.result;
      } else if (this.$i18n.locale == "ja") {
        currItem = currItem.result.ja.result;
      } else if (this.$i18n.locale == "zh") {
        currItem = currItem.result.zh.result;
      } else {
        currItem = currItem.result.en.result;
      }
      return currItem;
    },

    getLocalizedLearn() {
      let currItem = helpers.find((row) => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.learn.es.learn;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.learn.pt.learn;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.learn.fr.learn;
      } else if (this.$i18n.locale == "ar") {
        currItem = currItem.learn.ar.learn;
      } else if (this.$i18n.locale == "de") {
        currItem = currItem.learn.de.learn;
      } else if (this.$i18n.locale == "he") {
        currItem = currItem.learn.he.learn;
      } else if (this.$i18n.locale == "it") {
        currItem = currItem.learn.it.learn;
      } else if (this.$i18n.locale == "tr") {
        currItem = currItem.learn.tr.learn;
      } else if (this.$i18n.locale == "ja") {
        currItem = currItem.learn.ja.learn;
      } else if (this.$i18n.locale == "zh") {
        currItem = currItem.learn.zh.learn;
      } else {
        currItem = currItem.learn.en.learn;
      }
      return currItem;
    },

    getDetails() {
      let currItem = helpers.find((row) => row.id == this.id);
      return currItem;
    },
  },
  data() {
    const item = helpers.find((row) => row.id == this.id);

    return {
      showInstructions: !item || item.initialHide,
      showResult: false,
      popoverShow: false,
    };
  },

  methods: {
    togglePopover(item) {
      if (this.popoverShow) {
        this.popoverShow = false;
      } else {
        //log that you showed a popover
        this.trackClick(item);
        this.popoverShow = true;
        emitter.emit("showResult", item.id);
      }
    },
    trackClick(item) {
      let event = "clicked_helper_" + item.name;
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
  },
};
</script>
