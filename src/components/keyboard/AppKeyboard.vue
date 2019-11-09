<template>
  <div class="keyboard">
    <app-keyboard-buttons />
    <app-keyboard-rage />
  </div>
</template>

<script>
import AppKeyboardButtons from '@/components/keyboard/AppKeyboardButtons';
import AppKeyboardRage from '@/components/keyboard/AppKeyboardRage';

export default {
	name: 'AppKeyboard',
  components: {AppKeyboardRage, AppKeyboardButtons},
}
</script>

<style lang="scss" scoped>

</style>
