<template>
  <div
    class="w-full h-screen min-h-152 bg-white flex justify-center items-center"
  >
    <template v-if="func === 'sign-up'">
      <BoardSignUp></BoardSignUp>
    </template>
    <template v-if="func === 'login'">
      <BoardLogin></BoardLogin>
    </template>
  </div>
</template>

<script>
import BoardSignUp from '@/components/BoardSignUp.vue'
import BoardLogin from '@/components/BoardLogin.vue'

export default {
  components: {
    BoardSignUp,
    BoardLogin
  },
  props: {
    func: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.form-view {
  @apply w-112 bg-blue-300 h-144;
}
</style>
