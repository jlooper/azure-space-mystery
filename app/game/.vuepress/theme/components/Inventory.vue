<template>
  <div class="markdown-body">
    <p class="text-2xl pb-5 pt-5 ms-5 text-sans text-white text-start">
      {{ $t("inventory") }}
    </p>
    <div class="p-5 text-start">
      <div v-if="inventory.length == 0">
        <span class="text-white text-start">{{ $t("noinventory") }}</span>
      </div>
      <div v-else>
        <div class="wrapper">
          <div v-for="item in inventory" class="item">
            <div class="inventoryItem">
              <span class="container" width="200px">
                <img :src="getUrl(item)" :alt="getLocalizedName(item)" />
              </span>
              <p class="caption">{{ getLocalizedName(item) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getItems, getLocale } from "@theme/utils";
const items = require("@theme/utils/items.json");
import messages from "@theme/translations/misc.js";
import { emitter } from "@theme/utils/emitter";
import { i18n } from "@theme/utils/i18n";

export default {
  name: "Inventory",
  i18n: {
    messages,
  },
  data() {
    let obj = { inventory: [] };
    return obj;
  },
  methods: {
    showInventoryItems() {
      var ids = getItems();
      this.inventory = ids.map((id) => items.find((item) => item.id == id));
    },

    getLocalizedName(item) {
      let currItem = item;

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
    getUrl(item) {
      if (item) {
        return this.$withBase("/images/" + item.url);
      }
      return "";
    },
  },
  created() {
    this.showInventoryItems();
    this.$i18n.locale = getLocale();

    emitter.on("item_added", (id) => {
      this.showInventoryItems();
    });
    emitter.on("lang_changed", (lang) => {
      this.$i18n.locale = lang;
    });
  },
};
</script>
<style scoped>
.inventoryItem {
  text-align: center;
  background-color: white;
  padding: 1em;
  border-radius: 2px;
}
.caption {
  padding-top: 0px;
}
</style>
