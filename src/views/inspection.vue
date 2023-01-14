<template>
    <main class="container">
        <form @submit.prevent="saveInspection">
            <div class="form-group">
                <label for="completion">Completion</label>
                <input type="checkbox" v-model="inspection.completion" class="form-control" id="completion">
            </div>
            <div class="form-group">
                <label for="cleanlinessScore">Cleanliness Score</label>
                <select v-model="inspection.cleanlinessScore" class="form-control" id="cleanlinessScore">
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
            <div class="form-group">
                <label for="damage">Damage</label>
                <damage-component v-for="(damage, index) in inspection.damage" :key="index" :damage="damage"></damage-component>
                <button class="btn btn-primary" @click="addDamage">Add Damage</button>
            </div>
            <div class="form-group">
                <label for="maintenance">Maintenance</label>
                <maintenance-component v-for="(maintenance, index) in inspection.maintenance" :key="index" :maintenance="maintenance"></maintenance-component>
                <button class="btn btn-primary" @click="addMaintenance">Add Maintenance</button>
            </div>
            <div class="form-group">
                <label for="installations">Installations</label>
                <installation-component v-for="(installation, index) in inspection.installations" :key="index" :installation="installation"></installation-component>
                <button class="btn btn-primary" @click="addInstallation">Add Installation</button>
            </div>
            <div class="form-group">
                <label for="modifications">Modifications</label>
                <modification-component v-for="(modification, index) in inspection.modifications" :key="index" :modification="modification"></modification-component>
                <button class="btn btn-primary" @click="addModification">Add Modification</button>
            </div>
            <div class="form-group">
                <button class="btn btn-danger" @click="cancelInspection">Cancel</button>
                <button class="btn btn-success" type="submit">Save</button>
                <button v-if="!inspection.completion" class="btn btn-success" @click="completeInspection">Complete</button>
            </div>
        </form>
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
                addressId: ''
            };
        },
        async created() {
            this.addressId = Number(this.$route.params.address);
            let inspectionId = Number(this.$route.params.id);

            try {
                const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                    }
                });

                this.inspection = response.data.record.addresses.filter(address => address.id === this.addressId)[0].inspections.filter(inspection => inspection.id === inspectionId)[0];
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
                const response = await axios.put(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00`, {
                    record: this.inspection,
                    addressId: this.addressId
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                    }
                });

                console.log(response);
            } catch (error) {
                console.log(error);
            }
        },
        cancelInspection() {
        this.$router.push({ name: 'inspections', params: { address: this.addressId, completed: false } });
        },
        completeInspection() {
            this.inspection.completion = true;
            this.saveInspection();
        }
    }
}
</script>