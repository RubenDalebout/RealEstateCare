<template>
    <inspections :finished="showFinished"/>
</template>

<script>
import Inspections from '@/components/Inspections.vue'

export default {
    components: {
        Inspections
    },
    data() {
        return {
            showFinished: true,
        };
    },
}
</script>