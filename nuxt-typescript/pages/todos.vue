<template>
  <div>
    <div v-for="item in lists" :key="item.id">
      <h4>{{ item.title }}</h4>
    </div>
    <button @click="getData">Get Users</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from "nuxt-property-decorator";
const todos = namespace("todos");

@Component
export default class Todos extends Vue {
  @todos.State
  public lists!: object[];

  @todos.Action
  public getTodos!: () => void;

  public getData(): void {
    this.getTodos();
  }

  // public async asyncData({ $axios }: Context) {
  //   let response = await $axios.$get(
  //     "https://jsonplaceholder.typicode.com/todos"
  //   );
  //   return { response };
  // }
}
</script>

<style scoped>
</style>