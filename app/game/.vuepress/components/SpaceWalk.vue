<template>
  <div class="spacewalk">
    <div>
    Enter a date for your planned space walk
    </div>
    
    <div class="input">
      <input type="date" v-model="answer" /><button @click="save()">Save date</button>
    </div>
    <div>
      <p role="alert">{{ message }}</p>
        <p v-if="showNext">
          <router-link to="continue">{{ $t("continue") }}</router-link>
        </p>
        <p v-if="showBad">
          <router-link to="justrepair">{{ $t("continue") }}</router-link>
        </p>
    </div>
  </div>
</template>
<script>
import messages from "@theme/translations/misc.js";
import { getLocale } from "@theme/utils/helpers";
import { emitter } from "@theme/utils/emitter";

export default {
  name: 'SpaceWalk',
  i18n: {
    messages,
  },
  data() {
    return {
      showNext: false,
      showBad: false,
      answer: '2020-09-28',
      message: ''
    }
    
  },
  methods: {
    save() {
      // check this.answer
      const correct = new Date('2020-09-28').getTime();
      if (new Date(this.answer).getTime() !== correct) {
       this.message = this.$t("pass");
       this.showNext = true;
     } else {
       this.showBad = true;
       this.message = this.$t("pass");
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
<style lang="stylus">
 .spacewalk {
  margin-top: 20px;
   color: white;
   border-radius: 3px;
   background: #000c4c;
   padding: 10px;
   .input {
     margin-top: 10px;
   }

   input {
      margin-top: 10px;
      border-radius: 3px;
      padding: 3px;
   }
   button {
      padding: 5px;
      border-radius: 3px;
      margin-left: 5px;
   }
 }
</style>