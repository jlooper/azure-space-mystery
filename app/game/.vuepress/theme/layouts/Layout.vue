<template>
  <div class="wrapper">
    <div
      class="markdown-body font-sans bg-white m-2 sm:m-3 md:m-6 lg:m-12 text-lg rounded-lg"
    >
      <Nav />
      <div
        role="banner"
        v-if="hasBackdrop"
        :style="{
          backgroundImage: 'url(/AzureSpaceMystery/' + hasBackdrop + ')',
        }"
        class="w-full image backdrop"
      >
        &nbsp;
      </div>
      <div class="flex mb-4">
        <div v-if="!fullScreenLayout" role="complementary" :class="hidden">
          <component :is="inventory"></component>
        </div>
        <div role="main" class="w-full">
          <component :is="layout"></component>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>
<script>
import Nav from "@theme/components/Nav.vue";
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import Inventory from "@theme/components/Inventory.vue";
import Footer from "@theme/components/Footer.vue";
import {
  hasItem,
  getUID,
  setUID,
  hasUID,
  setSessionTicket,
} from "@theme/utils";
import axios from "axios";

export default {
  components: {
    Nav,
    BasicLayout,
    Inventory,
    Footer,
  },
  data() {
    return {
      hidden: "lg:inline-block md:hidden sm:hidden hidden w-1/2",
      
    };
  },
  methods: {
    login() {
      if (!hasUID()) {
        setUID();
      }
      axios
        .post("https://space-mystery-api.azurewebsites.net/api/loginAnon", {
          id: getUID(),
          createAccount: hasUID(),
        })
        .then((response) => {
          console.log(response);
          if (response.data.errorMessage == null) {
            setSessionTicket(response.data.SessionTicket);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "BasicLayout";
    },
    inventory() {
      return this.$page.frontmatter.inventory || "Inventory";
    },
    hasBackdrop() {
      return this.$page.frontmatter.backdrop || false;
    },
    fullScreenLayout() {
      return this.$page.frontmatter.fullScreenLayout || false;
    },
  },
  created() {
    this.login();
  },
};
</script>

<style>
.backdrop {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
