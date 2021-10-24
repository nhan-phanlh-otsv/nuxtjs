<template>
  <div class="user-details">
    <p>FirstName: {{ firstName }}</p>
    <p>LastName: {{ lastName }}</p>
    <p>FullName: {{ fullName }}</p>
    <div>Calculate Age:</div>
    <input v-model="year" type="number" />
    {{ ageText }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      firstName: "Kent",
      lastName: "Phan",
      year: null,
      ageText: "Age",
    };
  },
  computed: {
    fullName(): string {
      return this.firstName + " " + this.lastName;
    },
  },
  watch: {
    year(newValue: number) {
      this.ageText = this.calculate(newValue);
    },
  },
  methods: {
    calculate(value: number): string {
      const currentYear = new Date().getUTCFullYear();
      let age = currentYear - value;
      return "Age: " + age;
    },
  },
});
</script>

<style scoped>
</style>