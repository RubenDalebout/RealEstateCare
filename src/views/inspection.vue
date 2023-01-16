<script setup>
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
</script>

<template>
    <main class="container">
        <button type="button" class="btn btn-danger" @click="cancelInspection()">Back to inspections</button>
        <form v-if="this.inspection.id !== ''" @submit.prevent="saveInspection">
            <h1>Inspection {{ inspection.id }}</h1>
            <div class="form-group">
                <label for="cleanlinessScore">Cleanliness Score</label>
                <select v-model="inspection.cleanlinessScore" class="form-select" id="cleanlinessScore">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="form-group my-3 py-3">
                <h2>
                    <button type="button" class="btn btn-secondary" @click="showDamage = !showDamage">
                        <ion-icon v-if="!showDamage" class="m-auto" id="navigation-caretDownOutline-icon" :icon="caretDownOutline"></ion-icon>
                        <ion-icon v-if="showDamage" class="m-auto" id="navigation-caretUpOutline-icon" :icon="caretUpOutline"></ion-icon>
                    </button>
                    <span class="ms-3">Damage</span>
                </h2>
                
                <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-primary" @click="addDamage">Add Damage</button>
                </div>
                <transition name="fade">
                    <div v-if="showDamage">
                        <damage-component v-for="(damage, index) in inspection.damage" :key="index" :damage="damage"></damage-component>
                    </div>
                </transition>
            </div>
            <div class="form-group my-3 py-3">
                <h2>
                    <button type="button" class="btn btn-secondary" @click="showMaintenance = !showMaintenance">
                        <ion-icon v-if="!showMaintenance" class="m-auto" id="navigation-caretDownOutline-icon" :icon="caretDownOutline"></ion-icon>
                        <ion-icon v-if="showMaintenance" class="m-auto" id="navigation-caretUpOutline-icon" :icon="caretUpOutline"></ion-icon>
                    </button>
                    <span class="ms-3">Maintenance</span>
                </h2>

                <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-primary" @click="addMaintenance">Add Maintenance</button>
                </div>
                <transition name="fade">
                    <div v-if="showMaintenance">
                        <maintenance-component v-for="(maintenance, index) in inspection.maintenance" :key="index" :maintenance="maintenance"></maintenance-component>
                    </div>
                </transition>
            </div>
            <div class="form-group my-3 py-3">
                <h2>
                    <button type="button" class="btn btn-secondary" @click="showInstallation = !showInstallation">
                        <ion-icon v-if="!showInstallation" class="m-auto" id="navigation-caretDownOutline-icon" :icon="caretDownOutline"></ion-icon>
                        <ion-icon v-if="showInstallation" class="m-auto" id="navigation-caretUpOutline-icon" :icon="caretUpOutline"></ion-icon>
                    </button>
                    <span class="ms-3">Installations</span>
                </h2>
                
                <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-primary" @click="addInstallation">Add Installation</button>
                </div>
                <transition name="fade">
                    <div v-if="showInstallation">
                        <installation-component v-for="(installation, index) in inspection.installations" :key="index" :installation="installation"></installation-component>
                    </div>
                </transition>
            </div>
            <div class="form-group my-3 py-3">
                <h2>
                    <button type="button" class="btn btn-secondary" @click="showModification = !showModification">
                        <ion-icon v-if="!showModification" class="m-auto" id="navigation-caretDownOutline-icon" :icon="caretDownOutline"></ion-icon>
                        <ion-icon v-if="showModification" class="m-auto" id="navigation-caretUpOutline-icon" :icon="caretUpOutline"></ion-icon>
                    </button>
                    <span class="ms-3">Modifications</span>
                </h2>
                <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-primary" @click="addModification">Add Modification</button>
                </div>

                <transition name="fade">
                    <div v-if="showModification">
                        <modification-component v-for="(modification, index) in inspection.modifications" :key="index" :modification="modification"></modification-component>
                    </div>
                </transition>
            </div>
            <div class="form-group d-flex gap-3">
                <button type="button" class="btn btn-danger" @click="cancelInspection()">Cancel</button>
                <button class="btn btn-success" type="submit">Save inspection</button>
                <button type="button" v-if="!inspection.completion" class="btn btn-success" @click="completeInspection">Complete inspection</button>
            </div>
        </form>

        <div v-else class="text-danger">
            <p>No inspection was found. Would you like to navigate back to the inspection overview? You can do so via the "Back to inspections" button.</p>
        </div>

        <div v-if="showToast" class="toast-container">
            <div v-bind:class="{'show': showToast}" :class="'toast toast-' + toastType">
                {{ toastMessage }}
            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';
    import DamageComponent from '../components/DamageComponent.vue';
    import MaintenanceComponent from '../components/MaintenanceComponent.vue';
    import InstallationComponent from '../components/InstallationComponent.vue';
    import ModificationComponent from '../components/ModificationComponent.vue';

    export default {
        name: 'Inspection',
        components: {
            DamageComponent,
            MaintenanceComponent,
            InstallationComponent,
            ModificationComponent
        },
        data() {
            return {
                inspection: {
                    completion: false,
                    damage: [],
                    maintenance: [],
                    installations: [],
                    modifications: [],
                    cleanlinessScore: 0
                },
                addressId: '',
                inspectionId: '',
                showDamage: false,
                showMaintenance: false,
                showInstallation: false,
                showModification: false,
                showToast: false,
                toastMessage: '',
                toastType: '',
            };
        },
        async created() {
            this.addressId = Number(localStorage.getItem('addressId'));
            let inspectionId = Number(localStorage.getItem('inspectionId'));
            this.inspectionId = inspectionId;

            try {
                const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                    }
                });

                if (response.data.record.addresses !== undefined && response.data.record.addresses !== null) {
                    if (this.addressId !== undefined && this.addressId !== null && response.data.record.addresses.filter(address => address.id === this.addressId) !== undefined && response.data.record.addresses.filter(address => address.id === this.addressId) !== null) {
                        let address = response.data.record.addresses.filter(address => address.id === this.addressId);
                        if (address.length > 0) {
                            address = address[0];
                            if (address.inspections.filter(inspection => inspection.id === inspectionId) !== undefined && address.inspections.filter(inspection => inspection.id === inspectionId) !== null) {
                                let inspection = address.inspections.filter(inspection => inspection.id === inspectionId);
                                if (inspection.length > 0) {
                                    this.inspection = inspection[0];
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        methods: {
            addDamage() {
                this.inspection.damage.push({});
            },
            addMaintenance() {
                this.inspection.maintenance.push({});
            },
            addInstallation() {
                this.inspection.installations.push({});
            },
            addModification() {
                this.inspection.modifications.push({});
            },
            async saveInspection() {
                try {
                    const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                        }
                    });

                    const addressIndex = response.data.record.addresses.findIndex(address => address.id === this.addressId);
                    const inspectionIndex = response.data.record.addresses[addressIndex].inspections.findIndex(inspection => inspection.id === this.inspectionId);

                    // Update data
                    response.data.record.addresses[addressIndex].inspections[inspectionIndex].completion = this.inspection.completion; // Completion
                    response.data.record.addresses[addressIndex].inspections[inspectionIndex].damage = this.inspection.damage; // Damage(s)
                    response.data.record.addresses[addressIndex].inspections[inspectionIndex].maintenance = this.inspection.maintenance; // Maintenance(s)
                    response.data.record.addresses[addressIndex].inspections[inspectionIndex].installations = this.inspection.installations; // Installation(s)
                    response.data.record.addresses[addressIndex].inspections[inspectionIndex].modifications = this.inspection.modifications; // Modification(s)
                    response.data.record.addresses[addressIndex].inspections[inspectionIndex].cleanlinessScore = this.inspection.cleanlinessScore; // CleanlinesScore
                    response.data.record.addresses[addressIndex].inspections[inspectionIndex].somethingBroken = this.inspection.somethingBroken; // SomethingBroken;

                    const update = await axios.put(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00`, {
                        addresses: response.data.record.addresses,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                        }
                    });

                    if (update.status === 200) {
                        this.toastType = 'success';
                        this.toastMessage = 'Inspection saved successfully';
                        this.showToast = true;

                        setTimeout(() => {
                            this.toastType = '';
                            this.toastMessage = '';
                            this.showToast = false;
                        }, 3000);
                    }

                    if (update.status !== 200) {
                        this.toastType = 'error';
                        this.toastMessage = 'Inspection not saved, error occurred';
                        this.showToast = true;

                        setTimeout(() => {
                            this.toastType = '';
                            this.toastMessage = '';
                            this.showToast = false;
                        }, 3000);
                    }
                } catch (error) {
                    this.toastType = 'error';
                    this.toastMessage = (err.code != 'ERR_NETWORK') ? 'There has been an error occurred, contact the developer!' : 'You dont have wifi!';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);

                    return;
                }
            },
            cancelInspection() {
                try {
                    this.$router.push({ name: 'inspections' });
                } catch (error) {
                    console.log(error);
                }
            },
            completeInspection() {
                this.inspection.completion = true;
                this.saveInspection();
                
                try {
                    this.$router.push({ name: 'inspections' });
                } catch (error) {
                    console.log(error);
                }
            }
    }
}
</script>