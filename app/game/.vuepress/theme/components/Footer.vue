<template>
  <footer class="footer rounded-b sticky pin-bottom p-6">
    <div
      class="text-sans flex-wrap text-white w-full text-base lg:text-xl md:text-sm sm:text-sm block flex-grow flex justify-center items-center w-auto"
    >
      <a href="http://go.microsoft.com/fwlink/?LinkId=521839" target="_blank"
        >privacy</a
      >&nbsp;|&nbsp;
      <a
        href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx"
      >
        terms </a
      >&nbsp;|&nbsp;
      <a href="mailto:ammteam@microsoft.com">support</a>
      &nbsp;|&nbsp; copyright &nbsp;|&nbsp;
      <a
        class="has-text-grey underline cursor-pointer"
        href="/AzureSpaceMystery/rocket/en/credits"
      >
        credits
      </a>
    </div>
  </footer>
</template>
<script>
import { getLocale } from "@theme/utils/helpers";
import messages from "../translations/footer.js";
import { emitter } from "@theme/utils/emitter";

export default {
  name: "Footer",
  i18n: {
    //messages,
  },
  methods: {
    goToCredits() {},
  },
  created() {},
};
</script>
<style scoped>
.markdown-body a {
  color: white;
}
</style>
