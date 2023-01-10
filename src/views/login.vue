<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm"></div>
            <div class="col-sm">
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
    </div>
</template>

<script>
import axios from 'axios'; // Import the axios library for making HTTP requests

export default {
    
    data() {
        return {
        emailOrUsername: "",
        password: "",
        alert: "",
        };
    },
    methods: {
        // Log in with the form's email/username and password
        loginRoute(submitEvent) {
            axios.get('src/data/users.json')
            .then((response) => {
                const user = response.data.filter(user => user.email === submitEvent.target.elements.email.value && user.password === submitEvent.target.elements.password.value);

                if (user.length > 0) {
                    localStorage.setItem('user', submitEvent.target.elements.email.value)
                    this.$router.go('/') 

                    console.log(localStorage)
                    
                } else {
                    alert('foutief')
                }
            });
        },
    },
};
</script>