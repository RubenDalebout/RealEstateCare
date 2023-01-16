<template>
    <app-header />
    <router-view></router-view>
    <app-footer />
    <NoWifiModal />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import NoWifiModal from '@/components/NoWifiModal.vue'


export default {
  components: {
    AppHeader,
    AppFooter,
    NoWifiModal
  }
}
</script>
