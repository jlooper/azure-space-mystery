<template>
  <footer class="footer rounded-b sticky pin-bottom p-6">
    <div
      class="text-sans flex-wrap text-white w-full text-base lg:text-xl md:text-sm sm:text-sm block flex-grow flex justify-center items-center w-auto"
    >
      <a href="http://go.microsoft.com/fwlink/?LinkId=521839" target="_blank">{{
        $t("privacy")
      }}</a
      >&nbsp;|&nbsp;
      <a
        href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx"
      >
        {{ $t("terms") }} </a
      >&nbsp;|&nbsp;
      <a href="mailto:ammteam@microsoft.com">{{ $t("support") }}</a>
      &nbsp;|&nbsp;
      {{ $t("copyright") }}
      &nbsp;|&nbsp;
      <a
        class="has-text-grey underline cursor-pointer"
        href="/AzureSpaceMystery/rocket/en/credits"
      >
        {{ $t("credits") }}
      </a>
    </div>
  </footer>
</template>
<script>
import { emitter } from "@theme/utils/emitter";
import { getLocale, setLocale } from "@theme/utils";
import messages from "@theme/translations/footer.js";
import { i18n } from "@theme/utils/i18n";

export default {
  name: "Footer",
  i18n: {
    messages,
  },
  methods: {
    goToCredits() {
      var lang = getLocale();
      var currPath = this.$route.matched[0].path;
      var newPath = currPath.replace(/es|pt|en|fr/gi, lang);

      if (newPath == "") {
        this.$router.push({ path: "/rocket/" + getLocale() + "/credits" });
      } else {
        this.$router.push({ path: newPath });
      }
    },
  },

  created() {
    this.$i18n.locale = getLocale();
    emitter.on("lang_changed", (lang) => {
      this.$i18n.locale = lang;
    });
  },
};
</script>
<style scoped>
.markdown-body a {
  color: white;
}
</style>
