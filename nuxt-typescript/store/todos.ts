import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { $axios } from '~/utils/api';

interface JobData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

@Module({
    name: 'todos',
    stateFactory: true,
    namespaced: true,
})
class Todos extends VuexModule {
    public lists: JobData[] = [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }];

    @Mutation
    public setTodos(data: JobData[]) {
        this.lists = [...this.lists, ...data];
    }

    @Action({ commit: 'setTodos', rawError: true })
    public async getTodos() {
        const response = [{
            "userId": 2,
            "id": 2,
            "title": "Test Update User",
            "completed": true
        }];
        return response
    }
}

export default Todos