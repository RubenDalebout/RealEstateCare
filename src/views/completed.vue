<template>
    <main class="container">
        <div class="row">
            <div class="col">
                <inspections :finished="showFinished"/>
            </div>
        </div>
    </main>
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