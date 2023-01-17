<template>
    <main class="container">
        <div class="row">
            <div class="col-2-sm"></div>
            <!-- Profile settings container -->
            <div class="col-sm">
                <h1>Profile settings</h1>
                <!-- Profile form -->
                <form @submit.prevent="updateAccountDetails" id="accountdetails" name="accountdetails" method="post">
                    <div class="mb-3">
                        <label for="firstname" class="form-label">Firstname</label>
                        <input type="firstname" class="form-control" id="firstname" name="firstname" placeholder="John" :value="firstname">
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Lastname</label>
                        <input type="lastname" class="form-control" id="lastname" name="lastname" placeholder="Do" :value="lastname">
                    </div>
                    <div class="mb-3">
                        <label for="newpassword" class="form-label">New password</label>
                        <input type="newpassword" class="form-control" id="newpassword" name="newpassword" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;">
                    </div>
                    <div class="mb-3">
                        <label for="newpassword" class="form-label">Confirm new password</label>
                        <input type="newpassword" class="form-control" id="newpassword" name="newpassword" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;">
                    </div>
                    <div>
                        <!-- Update user information -->
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

export default {
    data() {
        const usrArr = JSON.parse(localStorage.getItem('user'));
        return {
            settings: {
            darkTheme: usrArr.settings.darkTheme,
            notifications: usrArr.settings.notifications,
            sounds: usrArr.settings.sounds
            },
            firstname: usrArr.firstName,
            lastname: usrArr.lastName,
            password: '',
            showToast: false,
            toastMessage: '',
            toastType: '',
            saving: false,
        };
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'home' });
        },  
        async updateSettings() {
            try {
                this.saving = true;
                // Get the user ID from local storage
                const usrArr = JSON.parse(localStorage.getItem('user'));
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
                    jsonData[userIndex].settings = this.settings;
                    
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

                        localStorage.setItem('user', JSON.stringify(user));

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
                console.log(error)
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
            this.saving = true;
            try {
                // Get the user ID from local storage
                const usrArr = JSON.parse(localStorage.getItem('user'));
                if (!usrArr) {
                    this.toastType = 'error';
                    this.toastMessage = 'No user logged in!';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);

                    this.saving = false;
                    return;
                }

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
                    const firstname = document.getElementById('firstname');

                    // Check if the firstname field exists
                    if (firstname != null && firstname != undefined && firstname.value.length > 0) {
                        jsonData[userIndex].firstName = firstname.value;
                    }

                    const lastname = document.getElementById('lastname');

                    // Check if the lastname field exists
                    if (lastname != null && lastname != undefined && lastname.value.length > 0) {
                        jsonData[userIndex].lastName = lastname.value;
                    }

                    const newPassword = document.getElementById('newpassword');
                    const confirmNewPassword = document.getElementById('confirmnewpassword');

                    // Check if the newPassword field exists
                    if (newPassword != null && newPassword != undefined && newPassword.value.length > 0) {
                        // Check if the confirmfield is filled in
                        if (confirmNewPassword != null && confirmNewPassword != undefined && confirmNewPassword.value.length > 0) {
                            // Check if they are the same
                            if (newPassword.value === confirmNewPassword.value) {
                                // Check if they are at least 6 characters
                                if (newPassword.value.length >= 6) {
                                    jsonData[userIndex].password = newPassword.value;
                                } else {
                                    this.toastType = 'error';
                                    this.toastMessage = 'Password needs to be at least 6 characters';
                                    this.showToast = true;

                                    setTimeout(() => {
                                        this.toastType = '';
                                        this.toastMessage = '';
                                        this.showToast = false;
                                    }, 3000);
                                    this.saving = false;
                                    return;
                                }
                            } else {
                                this.toastType = 'error';
                                this.toastMessage = 'Passwords are not equal';
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

                        if (newPassword) newPassword.value = "";
                        if (confirmNewPassword) confirmNewPassword.value = "";
                        const user = jsonData[userIndex];
                        
                        delete user.password;

                        localStorage.setItem('user', JSON.stringify(user));

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