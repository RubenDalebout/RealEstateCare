<template>
    <main class="container">
        <div class="row mt-5">
            <div class="col-sm"></div>
            <div class="col-sm">
                <!-- form to handle the login -->
                <form @submit.prevent="loginRoute" id="login" name="login" method="post">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="johndoe@realestatecare.com">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;">
                    </div>
                    <div>
                        <input type="submit" value="Login" class="btn btn-primary">
                    </div>
                </form>
            </div>
            <div class="col-sm"></div>
        </div>

        <!-- toast message container -->
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
        return {
            email: "",
            password: "",
            alert: "",
            showToast: false,
            toastMessage: '',
            toastType: '',
        };
    },
    methods: {
        async loginRoute(submitEvent) {
            try {
                // Send GET request to jsonbin.io to retrieve the users.json file
                const response = await axios.get('https://api.jsonbin.io/v3/b/63c0345215ab31599e349bb2/latest', {
                    headers: {
                        'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                    }
                });

                // If response is not success show a error toast
                if (response.status !== 200) {
                    this.toastType = 'error';
                    this.toastMessage = 'Could not verify the user';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);

                    return;
                }

                // Filter the data using your condition
                const user = response.data.record.filter(user => user.email === submitEvent.target.elements.email.value && user.password === submitEvent.target.elements.password.value);

                // Check if there is a user found
                if (user.length > 0) {
                    // Removing the password key from the user object
                    delete user[0].password;

                    // Set the user object to the localStorage
                    localStorage.setItem('user', JSON.stringify(user[0]));

                    // navigate user to home page
                    this.$router.go('/'); 
                } else {
                    // show an error toast if there is no user found
                    this.toastType = 'error';
                    this.toastMessage = 'There is no user with those credentials found';
                    this.showToast = true;

                    setTimeout(() => {
                        this.toastType = '';
                        this.toastMessage = '';
                        this.showToast = false;
                    }, 3000);
                }
            } catch (err) {
                // something went wrong show an error toast
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
        }
    }
}
</script>