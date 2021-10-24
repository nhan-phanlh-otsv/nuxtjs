<template>
  <div class="user">
    <div class="title">Welcome {{ fullName }}</div>
    <div>
      First Name:
      <input type="text" v-model="localData.firstName" />
    </div>
    <div>
      Last Name:
      <input type="text" v-model="localData.lastName" />
    </div>
    <button @click="update">Update Info</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from "nuxt-property-decorator";
const user = namespace("user");

@Component
export default class UserStore extends Vue {
  public localData: object = {};
  @user.State
  public info!: object;
  @user.Getter
  public fullName!: string;
  //   @user.Mutation
  //   public updateUserInfo!: (data: object) => void;
  @user.Action
  public updateUser!: (data: object) => void;

  mounted() {
    this.localData = { ...this.localData, ...this.info };
  }
  public update(): void {
    this.updateUser(this.localData);
  }
}
</script>

<style scoped>
</style>