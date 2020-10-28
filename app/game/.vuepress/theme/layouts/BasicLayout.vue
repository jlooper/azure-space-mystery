<template>
  <div class="markdown-body">
    <div class="float-right mr-3">
      <div class="flex flex-wrap m-2">
        <label
          class="mr-3 float-left block tracking-wide text-white text-xs font-bold mb-2"
          for="grid-state"
          >{{ $t("language") }}</label
        >
        <div class="relative">
          <select
            role="listbox"
            @change="setLanguage($event)"
            class="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight"
            id="level"
          >
            <option role="link" value="en">English</option>
            <option role="link" value="es">Español</option>
            <option role="link" value="fr">Français</option>
            <option role="link" value="pt">Português</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <p class="text-3xl pb-5 pt-5 ml-5 text-sans">
      {{ $page.frontmatter.title }}
    </p>
    <div class="p-5 bg-white m-5 mt-6 rounded">
      <Content />
    </div>
  </div>
</template>

<script>
import { emitter } from "@theme/utils/emitter";
import { getLocale, setLocale } from "@theme/utils/helpers";
import messages from "@theme/translations/misc.js";
import { i18n } from "@theme/utils/i18n";

export default {
  name: "BasicLayout",
  i18n: {
    messages,
  },
  methods: {
    setLanguage(event) {
      if (event.keyCode != 27) {
        var lang = event.target.value;
        this.$i18n.locale = lang;
        setLocale(lang);
        emitter.emit("lang_changed", lang);
        var currPath = this.$route.matched[0].path;
        var newPath = currPath.replace(/es|pt|en|fr/gi, lang);
        this.$router.push({ path: newPath });
        
      }
    },
  },
  mounted() {
    emitter.on("*", (type, e) => console.log("listening to page ", type, e));
  },
  created() {
    this.$i18n.locale = getLocale();
  },
};
</script>
