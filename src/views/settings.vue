<template>
    <main class="container">
        <div class="row">
            <div class="col-2-sm"></div>
            <!-- Profile settings container -->
            <div class="col-sm">
                <h1>Profile settings</h1>
                <!-- Profile form -->
                <form v-on:submit.prevent="updateAccountDetails" id="accountdetails" name="accountdetails" method="post">
                    <div class="mb-3">
                        <label for="firstname" class="form-label">Firstname</label>
                        <input type="firstname" class="form-control" id="firstname" name="firstname" placeholder="John" v-model="firstname">
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Lastname</label>
                        <input type="lastname" class="form-control" id="lastname" name="lastname" placeholder="Do" v-model="lastname">
                    </div>
                    <div class="mb-3">
                        <label for="newpassword" class="form-label">New password</label>
                        <input type="newpassword" class="form-control" id="newpassword" name="newpassword" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" v-model="newpassword">
                    </div>
                    <div class="mb-3">
                        <label for="newpassword" class="form-label">Confirm new password</label>
                        <input type="newpassword" class="form-control" id="newpassword" name="newpassword" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" v-model="confirmnewpassword">
                    </div>
                    <div>
                        <input :disabled="saving" type="submit" value="Change account" class="btn btn-primary">
                    </div>
                </form>

            </div>
            <div class="col-2-sm"></div>
        </div>
        <hr>
        <div class="row">
            <div class="col-2-sm"></div>
            <!-- Application settings for user container -->
            <div class="col-sm">
                <h1>Application settings</h1>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" v-model="settings.darkTheme">
                    <label class="form-check-label" for="darkModeSwitch">Dark modus</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="notificationsSwitch" v-model="settings.notifications">
                    <label class="form-check-label" for="notificationsSwitch">Notifications</label>
                </div>
                <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" role="switch" id="soundSwitch" v-model="settings.sounds">
                    <label class="form-check-label" for="soundSwitch">Sounds</label>
                </div>
                <!-- Update application settings for user -->
                <button :disabled="saving" class="btn btn-primary" @click="updateSettings()">Save changes</button>
            </div>
            <div class="col-2-sm"></div>
        </div>
        <button class="btn btn-danger mt-3" @click="logout()">Logout</button>

        <div v-if="showToast" class="toast-container">
            <div v-bind:class="{'show': showToast}" :class="'toast toast-' + toastType">
                {{ toastMessage }}
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import store from '../store/store.js'

export default {
    data() {
        return {
            settings: (store.getters.user.settings != undefined) ? store.getters.user.settings : false,
            firstname: (store.getters.user.firstName != undefined) ? store.getters.user.firstName : false,
            lastname: (store.getters.user.lastName != undefined) ? store.getters.user.lastName : false,
            password: '',
            newpassword: '',
            confirmnewpassword: '',
            showToast: false,
            toastMessage: '',
            toastType: '',
            saving: false,
        };
    },
    methods: {
        logout() {
            store.commit("setUser", {})
            this.$router.push({ name: 'home' });
        },  
        async updateSettings() {
            try {
                this.saving = true;
                // Get the user ID from local storage
                const usrArr = (store.getters.user);
                if (!usrArr) {
                    this.toastType = 'success';
                    this.toastMessage = 'Not loggedin';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);
                }

                // Send GET request to GitHub REST API to retrieve the users.json file
                const response = await axios.get(`https://api.jsonbin.io/v3/b/63c0345215ab31599e349bb2/latest`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                    }
                });

                if (response.status !== 200) {
                    this.toastType = 'error';
                    this.toastMessage = 'Couldnt retrieve user settings';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);
                }

                // parse the response content to json
                const jsonData = response.data.record;
                // Find the user by id in the jsonData
                const userIndex = jsonData.findIndex(user => user.id === usrArr.id);

                // if the user found in the json data
                if (userIndex !== -1) {
                    // update the user settings
                    jsonData[userIndex].settings = store.getters.user.settings;
                    
                    const updateResponse = await axios.put(`https://api.jsonbin.io/v3/b/63c0345215ab31599e349bb2`, jsonData, {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                        }
                    });
                    if(updateResponse.status === 200) {
                        this.toastType = 'success';
                        this.toastMessage = 'Settings saved successfully';
                        this.showToast = true;

                        setTimeout(() => {
                            this.toastType = '';
                            this.toastMessage = '';
                            this.showToast = false;

                            this.$router.go()
                        }, 3000);

                        const user = jsonData[userIndex];
                        
                        delete user.password;

                        store.commit("setUser", user);

                        if (user.settings != undefined && user.settings != null) {
                            if (user.settings.darkTheme != undefined && user.settings.darkTheme != null) {
                                if (user.settings.darkTheme) {
                                    let darkThemeElements = document.querySelectorAll('[darkTheme="dark"]');
                                    for (let i = 0; i < darkThemeElements.length; i++) {
                                        darkThemeElements[i].removeAttribute("disabled");
                                    }
                                    let defaultThemeElements = document.querySelectorAll('[darkTheme="default"]');
                                    for (let i = 0; i < defaultThemeElements.length; i++) {
                                        defaultThemeElements[i].setAttribute("disabled", "true");
                                    }
                                    } else {
                                    let darkThemeElements = document.querySelectorAll('[darkTheme="dark"]');
                                    for (let i = 0; i < darkThemeElements.length; i++) {
                                        darkThemeElements[i].setAttribute("disabled", "true");
                                    }
                                    let defaultThemeElements = document.querySelectorAll('[darkTheme="default"]');
                                    for (let i = 0; i < defaultThemeElements.length; i++) {
                                        defaultThemeElements[i].removeAttribute("disabled");
                                    }
                                }
                            }
                        }
                    } else {
                        throw new Error(updateResponse.data);
                    }
                } else {
                    this.toastType = 'error';
                    this.toastMessage = 'User is not found in the API!';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);
                }
            } catch(error) {
                this.toastType = 'error';
                this.toastMessage = (error.code != 'ERR_NETWORK') ? 'There has been an error occurred, contact the developer!' : 'You dont have wifi!';
                this.showToast = true;

                setTimeout(() => {
                    this.toastType = '';
                    this.toastMessage = '';
                    this.showToast = false;
                }, 3000);
            }

            this.saving = false;
        },
        async updateAccountDetails() {
            try {
                // Get the user ID from local storage
                const usrArr = store.getters.user;
                if (!usrArr) {
                    this.toastType = 'error';
                    this.toastMessage = 'No user logged in!';
                    this.showToast = true;
                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);
                    return;
                }
                this.saving = true;
                // Send GET request to jsonbin.io to retrieve the user data
                const response = await axios.get(`https://api.jsonbin.io/v3/b/63c0345215ab31599e349bb2/latest`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                    }
                });
                // parse the response content to json
                const jsonData = response.data.record;
                // Find the user by id in the jsonData
                const userIndex = jsonData.findIndex(user => user.id === usrArr.id);
                // if the user found in the json data
                if (userIndex !== -1) {
                    // update the user account details
                    // Check if the firstname field exists
                    if (this.firstname && this.firstname.length > 0) {
                        jsonData[userIndex].firstName = this.firstname;
                    }
                    // Check if the lastname field exists
                    if (this.lastname && this.lastname.length > 0) {
                        jsonData[userIndex].lastName = this.lastname;
                    }
                    // Check if the newPassword field exists
                    if (this.newpassword && this.newpassword.length > 0) {
                        //check if the newpassword and confirmnewpassword are equal
                        if(this.newpassword === this.confirmnewpassword) {
                            jsonData[userIndex].password = this.newpassword;
                        } else {
                            this.toastType = 'error';
                            this.toastMessage = 'Passwords do not match!';
                            this.showToast = true;
                            setTimeout(() => {
                                this.toastType = '';
                                this.toastMessage = '';
                                this.showToast = false;
                            }, 3000);
                            this.saving = false;
                            return;
                        }
                    }

                    // Send PUT request to update the user account details on jsonbin.io
                    const updateResponse = await axios.put(`https://api.jsonbin.io/v3/b/63c0345215ab31599e349bb2`, jsonData, {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                        }
                    });
                       
                    if(updateResponse.status === 200) {
                        this.toastType = 'success';
                        this.toastMessage = 'Account updated successfully';
                        this.showToast = true;

                        setTimeout(() => {
                            this.toastType = '';
                            this.toastMessage = '';
                            this.showToast = false;
                        }, 3000);

                        this.newpassword, this.confirmnewpassword = '';
                        
                        const user = jsonData[userIndex];
                        
                        delete user.password;

                        store.commit("setUser", user);

                    } else {
                        this.toastType = 'error';
                        this.toastMessage = (response.code != 'ERR_NETWORK') ? 'There has been an error occurred, contact the developer!' : 'You dont have wifi!';
                        this.showToast = true;

                        setTimeout(() => {
                            this.toastType = '';
                            this.toastMessage = '';
                            this.showToast = false;
                        }, 3000);
                    }
                } else {
                    this.toastType = 'error';
                    this.toastMessage = 'No user has been found with that email';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);
                }
            } catch(error) {
                this.toastType = 'error';
                this.toastMessage = (error.code != 'ERR_NETWORK') ? 'There has been an error occurred, contact the developer!' : 'You dont have wifi!';
                this.showToast = true;

                setTimeout(() => {
                    this.toastType = '';
                    this.toastMessage = '';
                    this.showToast = false;
                }, 3000);
            }

            this.saving = false;
        }
    }
}
</script>