<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >{{ $t("nav.logo") }}</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }">{{
              $t("nav.about")
            }}</router-link>
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a
              class="px-2 text-white"
              href="#"
              @click.prevent="toggleAuthModal"
              >{{ $t("nav.loginOrRegister") }}</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }">{{
                $t("nav.manage")
              }}</router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">{{
                $t("nav.logout")
              }}</a>
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a
              class="px-2 text-white cursor-pointer"
              @click.prevent="changeLocal"
              >{{ currentLocal }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";

export default {
  name: "Header",
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocal() {
      return this.$i18n.locale === "fa" ? "فارسی" : "English";
    },
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
    },
    signOut() {
      this.userStore.signOut();

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
    changeLocal() {
      this.$i18n.locale = this.$i18n.locale === "fa" ? "en" : "fa";
    },
  },
};
</script>
