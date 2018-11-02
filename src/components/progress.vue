<template>
    <div class="scroll-progress" :style="`width: ${scrollProgressWidth}`"></div>
</template>

<script>
export default {
  name: 'Progress',
  props: ['scrollProgressWidth']
}
</script>

<style lang="scss">
    .scroll-progress {
        height: 3px;
        width: 0;
        background: orange;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    }
</style>
