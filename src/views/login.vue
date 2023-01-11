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
                // Send GET request to GitHub REST APIs to retrieve the users.json file
                const response = await axios.get('https://api.github.com/repos/DeEchteZeeuw/RealEstateCare/contents/src/data/users.json', {
                  headers: {
                    'Authorization': `Bearer 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`
                  }
                });

                // Parse the response.data.content to json 
                const jsonData = JSON.parse(atob(response.data.content));
                // Filter the data using your condition
                const user = jsonData.filter(user => user.email === submitEvent.target.elements.email.value && user.password === submitEvent.target.elements.password.value);

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