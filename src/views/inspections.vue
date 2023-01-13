<template>
    <main>
        <h1>Inspections</h1>
        <div v-for="inspection in inspections" :key="inspection.id">
            <p>ID: {{ inspection.id }}</p>
            <p>Completed: {{ inspection.completed }}</p>
        </div>
    </main>
</template>

  <script>
  export default {
    name: 'Inspections',
    data() {
      return {
        inspections: []
      };
    },
    created() {
      this.inspections = this.$route.params.inspections;
    }
  };
  </script>
  