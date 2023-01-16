<template>
  <div>
    <div v-if="!navigator.onLine" class="text-center">
      <b-modal ref="noWifiModal" :visible="true" title="Oops!">
        <p class="my-4">You don't have wifi. All your actions will be run when there is wifi again</p>
        <b-btn variant="primary" @click="closeModal">Close</b-btn>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    closeModal() {
      this.$refs.noWifiModal.hide();
    }
  },
  mounted() {
    window.addEventListener("online", this.closeModal);
  },
  beforeDestroy() {
    window.removeEventListener("online", this.closeModal);
  }
};
</script>
