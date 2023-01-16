<template>
    <app-header />
    <router-view></router-view>
    <app-footer />
    <NoWifiModal />

    <div v-if="showOfflineToast" class="toast-container">
        <div v-bind:class="{'show': showOfflineToast}" :class="'toast toast-' + toastOfflineType">
            {{ toastOfflineMessage }}
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import NoWifiModal from '@/components/WifiCheck.vue'

import axios from 'axios'


export default {
  components: {
    AppHeader,
    AppFooter,
    NoWifiModal
  },
  created() {
    this.saveOfflineInspections();
  },  
  mounted() {
    window.addEventListener('online', this.saveOfflineInspections);
  },
  data() {
    return {
      showOfflineToast: false,
      toastOfflineMessage: '',
      toastOfflineType: '',
    }
  },  
  methods: {
    async saveOfflineInspections() {
      if (localStorage.getItem('offlineInspections') === null || localStorage.getItem('offlineInspections') === undefined || JSON.parse(localStorage.getItem('offlineInspections')).length  < 1) return;
      try {
          const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
              headers: {
                  'Content-Type': 'application/json',
                  'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
              }
          });

          JSON.parse(localStorage.getItem('offlineInspections')).forEach(inspection => {
            if (inspection.addressId === null || inspection.addressId === undefined || inspection.inspectionId === null || inspection.inspectionId === undefined) return;
            const addressIndex = inspection.addressId;
            const inspectionIndex = inspection.inspectionId;

            if (response.data.record.addresses[addressIndex] === null || response.data.record.addresses[addressIndex] === undefined ||
                response.data.record.addresses[addressIndex].inspections === null || response.data.record.addresses[addressIndex].inspections === undefined ||
                response.data.record.addresses[addressIndex].inspections[inspectionIndex] === null || response.data.record.addresses[addressIndex].inspections[inspectionIndex] === undefined ) return;

            // Update data
            response.data.record.addresses[addressIndex].inspections[inspectionIndex].completion = inspection.completion; // Completion
            response.data.record.addresses[addressIndex].inspections[inspectionIndex].damage = inspection.damage; // Damage(s)
            response.data.record.addresses[addressIndex].inspections[inspectionIndex].maintenance = inspection.maintenance; // Maintenance(s)
            response.data.record.addresses[addressIndex].inspections[inspectionIndex].installations = inspection.installations; // Installation(s)
            response.data.record.addresses[addressIndex].inspections[inspectionIndex].modifications = inspection.modifications; // Modification(s)
            response.data.record.addresses[addressIndex].inspections[inspectionIndex].cleanlinessScore = inspection.cleanlinessScore; // CleanlinesScore
            response.data.record.addresses[addressIndex].inspections[inspectionIndex].somethingBroken = inspection.somethingBroken; // SomethingBroken;

            delete inspection.addressId;
            delete inspection.inspectionId;
          });

          const update = await axios.put(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00`, {
              addresses: response.data.record.addresses,
          }, {
              headers: {
                  'Content-Type': 'application/json',
                  'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
              }
          });

          if (update.status === 200) {
              this.toastOfflineType = 'success';
              this.toastOfflineMessage = 'Offline inspection(s) saved successfully';
              this.showOfflineToast = true;

              setTimeout(() => {
                  this.toastOfflineType = '';
                  this.toastOfflineMessage = '';
                  this.showOfflineToast = false;
              }, 3000);
          }

          if (update.status !== 200) {
              this.toastOfflineType = 'error';
              this.toastOfflineMessage = 'Offline inspection(s) not saved, error occurred';
              this.showOfflineToast = true;

              setTimeout(() => {
                  this.toastOfflineType = '';
                  this.toastOfflineMessage = '';
                  this.showOfflineToast = false;
              }, 3000);
          }
      } catch (error) {
          // Save the inspection to the offlineInspection array when there's no internet connection
          this.toastOfflineType = 'error';
          this.toastOfflineMessage = 'You do not have wifi, inspections saved in offline mode';
          this.showOfflineToast = true;
          console.log(error)
          setTimeout(() => {
              this.toastType = '';
              this.toastMessage = '';
              this.showToast = false;
          }, 3000);
          return;
      }

      localStorage.removeItem('offlineInspections');
    },
  },
}
</script>