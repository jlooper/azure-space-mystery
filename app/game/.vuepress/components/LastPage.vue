<template>
  <div class="text-3xl rounded m-5 p-5 bg-yellow-300" v-if="endState || final">
    <div class="page-nav">
      <router-link to="/rocket/en/fin"
        >Complete your Mission and Fly to the ISS!</router-link
      >
    </div>
  </div>
</template>
<script>
import { getItems } from "@theme/utils/";
import { emitter } from "@theme/utils/emitter";

export default {
  computed: {
    endState() {
      let items = getItems();
      if (items.length == 4) {
        return true;
      } else return false;
    },
  },
  data() {
    return {
      final: false,
    };
  },
  methods: {
    showEndState() {
      let items = getItems();
      if (items.length == 4) {
        this.final = true;
      }
    },
  },
  created() {
    emitter.on("test_end", () => {
      this.showEndState();
    });
  },
};
</script>
<style lang="stylus">
.page-nav {
  font-weight: bold;
  padding-top: 10px;
  text-decoration: underline;
  display: block;
  cursor: pointer;
}
</style>
