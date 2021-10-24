import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

interface UserData {
    firstName: string
    lastName: string
    address1: string
    address2: string
    state: string
    country: string
    phone: number,
    year: number
}

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true,
})
class User extends VuexModule {
    public info: UserData = {
        firstName: 'Preetish',
        lastName: 'HS',
        address1: '',
        address2: '',
        state: '',
        country: '',
        phone: 9000000009,
        year: 1990
    }

    get fullName(): string {
        return this.info.firstName + ' ' + this.info.lastName
    }

    @Mutation
    public updateUserInfo(data: UserData) {
        this.info = { ...this.info, ...data }
    }

    @Action({ commit: 'updateUserInfo' })
    public updateUser(user: UserData) {
        return user
    }
}

export default User