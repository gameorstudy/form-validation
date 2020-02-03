<template>
  <div>
    <form @submit.prevent="createAccount" class="form-view">
      <label class="ml-8">Username</label>
      <BaseInput
        class="child-view"
        type="text"
        placeholder="Please enter your username"
        v-model.trim="username"
        @blur="$v.username.$touch()"
        :class="{ errorStyle: $v.username.$error }"
      ></BaseInput>

      <template v-if="$v.username.$error">
        <p class="child-view text-error" v-if="!$v.username.required">
          Username is required.
        </p>
      </template>
      <label class="ml-8">Password</label>
      <BaseInput
        class="child-view"
        type="password"
        v-model="pass"
        placeholder="Please enter your password"
        @blur="$v.pass.$touch()"
        :class="{ errorStyle: $v.pass.$error }"
      ></BaseInput>

      <template v-if="$v.pass.$error">
        <p class="child-view text-error" v-if="!$v.pass.required">
          Password is required.
        </p>
        <p class="child-view text-error" v-if="!$v.pass.minLength">
          Password must have at least 6 letters.
        </p>
      </template>
      <label class="child-view">Confirm Password</label>
      <BaseInput
        class="child-view"
        type="password"
        v-model="repeatPass"
        placeholder="Please enter your password again"
        @blur="$v.repeatPass.$touch()"
        :class="{ errorStyle: $v.repeatPass.$error }"
      ></BaseInput>

      <template v-if="$v.repeatPass.$error">
        <p class="child-view text-error" v-if="!$v.repeatPass.$sameAsPassword">
          Password should be identifica.
        </p>
      </template>

      <div class="flex justify-center items-center py-2">
        <BaseButton
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          :disabled="$v.$anyError"
          :class="{ disabledButton: $v.$anyError }"
          type="submit"
          >sign up</BaseButton
        >
      </div>
      <p v-if="$v.$anyError" class="ml-8 text-error">
        Please fill the required blank(s).
      </p>
    </form>
  </div>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      username: '',
      pass: '',
      repeatPass: ''
    }
  },
  methods: {
    createAccount() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$store.commit('CREATE_ACCOUNT', {
          name: this.username,
          password: this.pass
        })
        alert('Sign up successfully!')
        this.$router.push({ params: { func: 'login' } })
      }
    }
  },
  validations: {
    username: {
      required
    },
    pass: {
      required,
      minLength: minLength(6)
    },
    repeatPass: {
      sameAsPassword: sameAs('pass')
    }
  }
}
</script>

<style scoped>
.form-view {
  @apply w-112 bg-blue-300 h-144;
}
</style>
