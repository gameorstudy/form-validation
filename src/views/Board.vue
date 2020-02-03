<template>
  <div class="w-full h-screen bg-teal-600 ">
    <router-link
      :to="{ name: 'form', params: {
        func: 'login'
      } }"
      class="link-style text-right"
      >login</router-link
    >
    <span class="text-white">|</span>
    <router-link
      :to="{ name: 'form', params: {
        func: 'sign-up'
      } }"
      class="link-style text-left "
      >sign up</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.link-style {
  @apply text-snow px-5 py-2;
}
.link-style:hover {
  @apply bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
