<template>
    <main class="container">
        <div class="row">
            <div class="col-2-sm"></div>
            <div class="col-sm">
                <h1>Profile settings</h1>
                <form @submit.prevent="" id="accountdetails" name="accountdetails" method="post">
                    <div class="mb-3">
                        <label for="firstname" class="form-label">Firstname</label>
                        <input type="firstname" class="form-control" id="firstname" name="firstname" placeholder="John">
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Lastname</label>
                        <input type="lastname" class="form-control" id="lastname" name="lastname" placeholder="Do">
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
                        <input type="submit" value="Change account" class="btn btn-primary">
                    </div>
                </form>
            </div>
            <div class="col-2-sm"></div>
        </div>
        <hr>
        <div class="row">
            <div class="col-2-sm"></div>
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
                <button class="btn btn-primary" @click="updateSettings()">Save changes</button>
            </div>
            <div class="col-2-sm"></div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      settings: {
        darkTheme: false,
        notifications: true,
        sounds: true
      },
      githubAccessToken: "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"
    }
  },
  methods: {
    async updateSettings() {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/DeEchteZeeuw/RealEstateCare/main/src/data/users.json',
          {
            headers: {
              Authorization: `Bearer ${this.githubAccessToken}`
            }
          }
        )
        const users = response.data
        const userId = localStorage.getItem('userId')
        const userIndex = users.findIndex(u => u.id === parseInt(userId))
        if (userIndex !== -1) {
          users[userIndex].settings.darkTheme = this.settings.darkTheme
          users[userIndex].settings.notifications = this.settings.notifications
          users[userIndex].settings.sounds = this.settings.sounds
          await axios.patch(
            'https://api.github.com/repos/DeEchteZeeuw/RealEstateCare/contents/src/data/users.json',
            {
              message: 'Update user settings',
              content: btoa(JSON.stringify(users)),
              sha: sha,
            },
            {
              headers: {
                Authorization: `Bearer ${this.githubAccessToken}`
              }
            }
          )
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>