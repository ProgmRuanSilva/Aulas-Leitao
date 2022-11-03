<template>
    <div class="calculator">
        <Display />
        <Button />
    </div>
</template>

<script>

import Display from '../components/Display';
import Button from '../components/Button'

export default {
    components: {Button, Display}
}
</script>

<style>

.cauculator {
    height: 320px;
    width: 235;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>