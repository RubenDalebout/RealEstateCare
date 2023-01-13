<template>
    <div>
        <h1>Inspections</h1>
        <ul>
            <li v-for="inspection in inspections" :key="inspection.id">
                {{ inspection.description }}
            </li>
        </ul>
    </div>
</template>
  
<script>
    export default {
        name: 'InspectionsView',
        props: ['inspections']
    }
</script>