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
                    'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`
                  }
                });

                // Parse the response.data.content to json 
                const jsonData = JSON.parse(Buffer.from(response.data.content, 'base64').toString());

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