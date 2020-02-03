<template>
  <div>
    <form @submit.prevent="verifyAccount" class="form-view">
      <div class="child-view w-full h-12 relative form-label-group">
        <BaseInput
          class="placeholder-transparent text-base absolute"
          type="text"
          placeholder="Username"
          v-model.trim="username"
          @blur="$v.username.$touch()"
          :class="{ errorStyle: $v.username.$error }"
        ></BaseInput>
        <label
          :class="{ borderStyle: $v.username.$error }"
          class=" text-gray-600 text-base absolute pl-2 leading-triple cursor-text pointer-events-none transitionStyle"
          >Username</label
        >
      </div>
      <template v-if="$v.username.$error">
        <p class="child-view text-error" v-if="!$v.username.required">
          Username is required.
        </p>
      </template>
      <div class="w-full h-12 child-view relative form-label-group">
        <BaseInput
          class="placeholder-transparent absolute"
          type="password"
          v-model="pass"
          placeholder="Password"
          @blur="$v.pass.$touch()"
          :class="{ errorStyle: $v.pass.$error }"
        ></BaseInput>
        <label
          :class="{ borderStyle: $v.pass.$error }"
          class="text-gray-600 absolute pl-2 leading-triple cursor-text pointer-events-none transitionStyle"
          >Password</label
        >
      </div>
      <template v-if="$v.pass.$error">
        <p class="child-view text-error" v-if="!$v.pass.required">
          Password is required.
        </p>
      </template>
      <div class="flex justify-center items-center py-2">
        <BaseButton
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          :disabled="$v.$anyError"
          :class="{ disabledButton: $v.$anyError }"
          type="submit"
          >login</BaseButton
        >
      </div>
      <p v-if="$v.$anyError" class="ml-8 text-error">
        Please fill the required blank(s).
      </p>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: '',
      pass: ''
    }
  },
  methods: {
    verifyAccount() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$store.commit('CHECK_ACCOUNT', {
          name: this.username,
          password: this.pass
        })
      }
    }
  },
  validations: {
    username: {
      required
    },
    pass: {
      required
    }
  }
}
</script>

<style scoped>
.form-view {
  @apply w-112 bg-blue-300 h-144;
}
</style>
