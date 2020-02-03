<template>
  <div>
    <h1>The page you're navigating is not existed.</h1>
    <p>
      If you want to go back main page, click
      <router-link :to="{ name: 'board' }" class="text-green-500 underline"
        >here</router-link
      >
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
