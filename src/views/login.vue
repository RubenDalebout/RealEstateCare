<template>
    <main class="container">
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

                // Filter the data using your condition
                const user = response.data.record.filter(user => user.email === submitEvent.target.elements.email.value && user.password === submitEvent.target.elements.password.value);

                if (user.length > 0) {
                    // Removing the password key from the user object
                    delete user[0].password;

                    // Set the user object to the localStorage
                    localStorage.setItem('user', JSON.stringify(user[0]));

                    // navigate user to home page
                    this.$router.go('/'); 
                } else {
                    alert('foutief');
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
}
</script>