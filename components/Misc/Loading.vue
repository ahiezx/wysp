<template>
    <div v-if='loading' class="loading-overlay">
        <div class="loading-spinner"></div>
    </div>
</template>


<script>

export default {
    props: {
        loading: {
            type: Boolean,
            default: true
        }
    },
}

</script>

<style scoped>
.loading-overlay {
    height:100vh;
    /* background-color: rgba(0, 0, 0, 0.5); */
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #6034db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>