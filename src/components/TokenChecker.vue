<template>
<div class="TokenChecker"></div>
</template>

<script setup>
import { hasAuthToken, context } from '../core/context';
import { useRouter } from 'vue-router';

const props = defineProps({
    redirectPath: {
        type: String,
        default: '/login'
    }
})

if (!hasAuthToken()) {  
    useRouter().push(props.redirectPath);
}

window.ctx = context;
console.log("TokenChecker, ", hasAuthToken());
</script>
