<template>
  <div v-if="value" class="app-popup">
    <div class="wrap-popup">
      <div class="flex-1-1">
        <slot />
      </div>
      <div class="wrap-button flex-0-0 d-flex">
        <div class="flex-1-1" />
        <slot name="buttons"></slot>
        <button @click="$emit('input', false)">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPopup',
  props: {
    value: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.app-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.19);
  .wrap-popup {
    background: #fff;
    display: flex;
    flex-direction: column;
    min-width: 500px;
    min-height: 80vh;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
}
</style>