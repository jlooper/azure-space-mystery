<template>
  <div>
    <blockquote class="speech-bubble">
      <p>
        {{ $t("hypatiaquote") }}
      </p>
    </blockquote>
    <img
      alt="Hypatia"
      class="mb-10"
      style="display: inline"
      src="/images/hypatia.jpg"
    />
  </div>
</template>
<script>
import { getLocale } from "@theme/utils";
import messages from "@theme/translations/misc.js";
import { emitter } from "@theme/utils/emitter";
import { i18n } from "@theme/utils/i18n";

export default {
  name: "Hypatia",
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

