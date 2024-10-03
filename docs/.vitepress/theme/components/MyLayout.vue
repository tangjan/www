<script setup>
import DefaultTheme from "vitepress/theme";

import VPSwitchAppearance from './VPSwitchAppearance.vue'

import { useData } from '../composables/data'
const { site, theme } = useData()
import VPSocialLinks from './VPSocialLinks.vue'

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <div class="my_SocialLinks">
        <VPSocialLinks :links="theme.socialLinks" />
      </div>
      <div class="my_VPSwitch">
        <VPSwitchAppearance />
      </div>
    </template>
  </Layout>
</template>
