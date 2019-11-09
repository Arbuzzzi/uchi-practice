<template>
  <div
    class="scene"
    :style="computeStyleScene"
  >
    <div
      class="scene__item"
      :style="computeStyleDetail"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'AppScene',
  computed: {
    ...mapGetters([
      'getDetail',
      'getDetailPosition',
      'getScene'
    ]),
    computeStyleDetail() {
      return {
        top: this.getDetailPosition.top + 'px',
        left: this.getDetailPosition.left + 'px',
      }
    },
    computeStyleScene() {
      return {
        width: this.getScene.width + 'px',
        height: this.getScene.height + 'px',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $detailSize: 50;
  $sceneSize: 500;
.scene {
  position: relative;
  width: $sceneSize + px;
  height: $sceneSize + px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #0c0729;
  &__item {
    position: absolute;
    top: ($sceneSize/2 - $detailSize/2) + px;
    left: ($sceneSize/2 - $detailSize/2) + px;
    width: $detailSize + px;
    height: $detailSize + px;
    border: 1px solid #0c0729;
  }
}
</style>
