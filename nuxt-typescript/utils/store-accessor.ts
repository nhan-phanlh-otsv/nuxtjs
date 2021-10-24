import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import User from '~/store/user';
import Todos from '~/store/todos';

let userStore: User;
let todosStore: Todos;

function initialiseStores(store: Store<any>): void {
  userStore = getModule(User, store)
  todosStore = getModule(Todos, store)
}

export { initialiseStores, userStore, todosStore }