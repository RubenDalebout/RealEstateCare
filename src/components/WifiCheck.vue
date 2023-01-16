<template>
  <div class="vh-100 position-fixed top-0 d-flex align-items-center nowifi">
    <div v-if="showNoWifiModal" class="text-center">
      <div ref="noWifiModal" class="bg-white p-3" :visible="true" title="Oops!">
        <p class="my-4">You don't have wifi. All your actions will be run when there is wifi again</p>
        <button class="btn btn-danger" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOnline: true,
      showNoWifiModal: false
    }
  },
  created() {
    window.addEventListener('online', this.updateIsOnline)
    window.addEventListener('offline', this.updateIsOnline)
  },
  methods: {
    updateIsOnline() {
      this.isOnline = navigator.onLine
      this.showNoWifiModal = !this.isOnline
    },
    closeModal() {
      this.showNoWifiModal = false;
    }
  }
}
</script>
