<template>
    <div>
        <h1>{{ $t('message.hello') }}</h1>
        <button @click="$emit('change')">Change locale</button>
    </div>
</template>
<script>
    export default {
        emits: ['change']
    };
</script>