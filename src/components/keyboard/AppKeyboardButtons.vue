<template>
  <div class="keyboard__box">
    <div class="btn-inn">
      <button
        class="btn btn-success"
        :disabled="computeMaxTopPos"
        @click="setDetailPosition('top')"
        @mousedown="startMove('top')"
        @mouseup="endMove()"
        @mouseleave="endMove()"
      >
        <font-awesome-icon icon="arrow-up" />
      </button>
    </div>
    <div class="btn-inn">
      <button
        class="btn btn-success"
        :disabled="computeMaxLeftPos"
        @click="setDetailPosition('left')"
        @mousedown="startMove('left')"
        @mouseup="endMove()"
        @mouseleave="endMove()"
      >
        <font-awesome-icon icon="arrow-left" />
      </button>
      <button
        class="btn btn-success"
        :disabled="computeMaxBottomPos"
        @click="setDetailPosition('bottom')"
        @mousedown="startMove('bottom')"
        @mouseup="endMove()"
        @mouseleave="endMove()"
      >
        <font-awesome-icon icon="arrow-down" />
      </button>
      <button
        class="btn btn-success"
        :disabled="computeMaxRightPos"
        @click="setDetailPosition('right')"
        @mousedown="startMove('right')"
        @mouseup="endMove()"
        @mouseleave="endMove()"
      >
        <font-awesome-icon icon="arrow-right" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

let interval;

export default {
	name: 'AppKeyboardButtons',
	computed: {
		...mapGetters([
			'getDetail',
			'getDetailPosition',
			'getScene',
      'getSpeed'
		]),
		computeMaxBottomPos() {
			let detailTop = this.getDetailPosition.top
			let detailHeight = this.getDetail.height
			let sceneHeight = this.getScene.height
			let isMaxPosition = detailTop + detailHeight + 2 >= sceneHeight

			if(isMaxPosition) {
				clearInterval(interval)
			}

			return isMaxPosition
		},
		computeMaxTopPos() {
			let detailTop = this.getDetailPosition.top
			let isMaxPosition = detailTop - 1 < 0

			if(isMaxPosition) {
				clearInterval(interval)
			}

			return isMaxPosition
		},
		computeMaxLeftPos() {
			let detailLeft = this.getDetailPosition.left
			let isMaxPosition = detailLeft - 1 < 0

			if(isMaxPosition) {
				clearInterval(interval)
			}

			return isMaxPosition
		},
		computeMaxRightPos() {
			let detailLeft = this.getDetailPosition.left
			let detailWidth = this.getDetail.width
			let sceneWidth = this.getScene.width
			let isMaxPosition = detailLeft + detailWidth + 2 >= sceneWidth

			if(isMaxPosition) {
				clearInterval(interval)
			}

			return isMaxPosition
		}
	},
	methods: {
		...mapActions([
			'setDetailPosition'
		]),
		startMove(direction) {
			clearInterval(interval)
			interval = setInterval(()=>{
				this.setDetailPosition(direction)
			}, 100 / this.getSpeed)
			// }, 100)

		},
		endMove() {
			clearInterval(interval)
		}
	}
}
</script>

<style scoped>

</style>
