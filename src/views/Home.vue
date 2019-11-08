<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-6">
        <app-scene />
      </div>
      <div class="col-6">
        <app-keyboard />
      </div>
    </div>
  </div>
</template>

<script>

import AppScene from '@/components/AppScene';
import AppKeyboard from '@/components/keyboard/AppKeyboard';
export default {
  name: 'Home',
  components: {
    AppKeyboard,
    AppScene

  }
}
</script>
