<template>
  <div class="prompt">
    <span class="font-bold" v-if="show">{{ instructions }}</span>
    <div class="page-nav" v-if="show">
      <router-link :to="link || './'">{{ action }}</router-link>
    </div>
  </div>
</template>
<script>
import { emitter } from "@theme/utils/emitter";
import { getItems } from "@theme/utils/";

export default {
  props: ["url", "action", "condition", "instructions"],

  data() {
    return {
      show: false,
      link: this.url,
    };
  },

  methods: {
    getInventory(id) {
      if (this.condition == id || this.condition == "none") {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    checkInventory() {
      let items = getItems();
      if (items.length == 4) {
        this.show = false;
      }
    },
  },
  created() {
    //initially, set home page to show followup
    this.getInventory(1);
    //don't show the continue button if you have everything
    this.checkInventory();

    emitter.on("item_added", (id) => {
      this.getInventory(id);
    });

    emitter.on("showResult", (id) => {
      this.getInventory(id);
    });

    emitter.on("test_end", () => {
      this.checkInventory();
    });
  },
};
</script>
<style lang="stylus">
.prompt {
  padding-top: 10px;
  font-size: 28px;
}

.page-nav {
  font-weight: bold;
  padding-top: 10px;
  text-decoration: underline;
  display: block;
  cursor: pointer;
}
</style>
