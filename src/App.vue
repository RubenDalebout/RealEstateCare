<template>
    <app-header />
    <router-view></router-view>
    <app-footer />
    <NoWifiModal />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import NoWifiModal from '@/components/WifiCheck.vue'


export default {
  components: {
    AppHeader,
    AppFooter,
    NoWifiModal
  },
  mounted() {
    window.addEventListener('online', this.handleConnectionChange);
  },
  methods: {
    handleConnectionChange() {
      let axiosCalls = JSON.parse(localStorage.getItem('axiosCalls')) || [];
      let executed = 0;
      let notExecuted = 0;

      if (axiosCalls.length > 0) {
        axiosCalls.forEach(call => {
          axios[call.method](call.url, call.data)
            .then(response => {
              executed++;
              call.executed = true;
            })
            .catch(error => {
              notExecuted++;
            });
        });

        axiosCalls = axiosCalls.filter(call => !call.executed);
        localStorage.setItem('axiosCalls', JSON.stringify(axiosCalls));
        console.log(`Executed ${executed} calls.`);
        console.log(`Not executed ${notExecuted} calls.`);
      }
    },
  }
}
</script>