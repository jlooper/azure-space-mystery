<template>
  <div class="content-center">
    <blockquote class="speech-bubble">
      <p>
        {{ $t("carolinequote") }}
      </p>
    </blockquote>
    <img
      alt="Caroline Herschel"
      class="mb-10"
      style="display: inline"
      src="/images/caroline.jpg"
    />
  </div>
</template>
<script>
import { getLocale } from "@theme/utils";
import messages from "@theme/translations/misc.js";
import { emitter } from "@theme/utils/emitter";
import { i18n } from "@theme/utils/i18n";

export default {
  name: "Caroline",
  i18n: {
    messages,
  },

  created() {
    this.$i18n.locale = getLocale();
    emitter.on("lang_changed", (lang) => {
      this.$i18n.locale = lang;
    });
  },
};
</script>


