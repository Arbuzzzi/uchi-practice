<template>
  <div class="rage-inn">
    <h2 class="text-left mt-5 mb-5">
      Скорость:
    </h2>
    <vue-range-slider
      :process-style="{backgroundColor: '#28a745'}"
      :tooltip-style="{backgroundColor: '#28a745', borderColor: '#28a745'}"
      :min="1"
      :max="10"
      :value="getSpeed"
      @input="setSpeed($event)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'AppKeyboardRage',
	data: () => ({
		value: 5
	}),
	computed: {
		...mapGetters([
			'getSpeed'
		])
	},
	methods: {
		...mapActions([
			'setSpeed'
		])
	}
}
</script>

<style scoped>

</style>
