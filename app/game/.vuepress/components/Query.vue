<template>
  <div class="query">
    The distance from the sun to the earth, is how much bigger than the distance from moon to the earth?

    <div>
    - Sun to earth distance: 147 220 000 km
    </div>

    <div>
    - Moon to earth distance: 384 400 km
    </div>

    <div class="text-center">
      <button 
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="test(10)">10 times</button>
    </div>
    <div class="text-center">
      <button 
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="test(100)">100 times</button>
    </div>
    <div class="text-center">
      <button 
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="test(522)">522 times</button>
    </div>
    <div class="text-center">
      <button 
       type="button"
       class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="test(383)">383 times</button>
    </div>
    
    <p role="alert">{{ message }}</p>
      <p v-if="showNext">
        <router-link to="continue">{{ $t("continue") }}</router-link>
      </p>
  </div>  
</template>
<script>
import messages from "@theme/translations/misc.js";
import { getLocale } from "@theme/utils/helpers";
import { emitter } from "@theme/utils/emitter";

export default {
  name: 'Query',
  i18n: {
    messages,
  },
  data() {
    return {
      answer: 0,
      message: "",
      showNext: false
    }
  },
  methods: {
    test(value) {
     if (value == 383) {
       this.message = this.$t("pass");
       this.showNext = true;
     } else {
       this.message = this.$t("fail");
     }
    }, 
    created() {
      this.$i18n.locale = getLocale();
      emitter.on("lang_changed", (lang) => {
        this.$i18n.locale = lang;
      });
   }
  }
}
</script>
<style lang="stylus" scoped>
  .query {
    background: #000c4c;
    color: white;
    padding: 10px;
    border-radius: 5px;

    button {
      margin: 3px 0;
    }

    input {
      text-align: right;
      margin: 10px 0;
      border-radius: 3px;
      padding: 5px;
      color: black;
    }
  }

  
</style>