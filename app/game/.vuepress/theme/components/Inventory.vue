<template>
  <div class="markdown-body">
    <p class="text-2xl pb-5 pt-5 ml-5 text-sans text-white text-left">Inventory</p>
    <div class="p-5 text-left">
      <div v-if="inventory.length == 0">
        <span class="text-white text-left">Sorry, there is nothing to show here.</span>
      </div>
      <div v-else>
        <div class="wrapper">
          <div v-for="item in inventory" class="item">
            <div class="inventoryItem">
              <p class="caption">{{ getName(item) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getItems } from "@theme/utils/helpers";
const items = require("@theme/utils/items.json");
import { emitter } from "@theme/utils/emitter";

export default {
  name: "Inventory",

  data() {
    let obj = { inventory: [] };
    return obj;
  },
  methods: {
    showInventoryItems() {
      var ids = getItems();
      this.inventory = ids.map((id) => items.find((item) => item.id == id));
    },
    getName(item) {
      if (!item.name) {
        return "";
      }
      let currItem = item;
      currItem = currItem.name;
      return currItem;
    },
  },
  created() {
    this.showInventoryItems();

    emitter.on("item_added", (id) => {
      console.log("item added");
      this.showInventoryItems();
    });
  },
  mounted() {
    emitter.on("*", (type, e) => console.log("listening to item ", type, e));
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
