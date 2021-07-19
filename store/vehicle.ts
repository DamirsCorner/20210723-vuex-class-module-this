import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { get } from '~/services/request'

@Module({ name: 'vehicle', stateFactory: true, namespaced: true })
export default class VehicleModule extends VuexModule {
  wheels: number = 2

  get axles(): number {
    return this.wheels / 2
  }

  @Mutation
  puncture(n: number): void {
    this.wheels = this.wheels - n
  }

  @Mutation
  addWheel(n: number) {
    this.wheels = this.wheels + n
  }

  @Action({ rawError: true })
  async fetchNewWheels(wheelStore: string): Promise<void> {
    const wheels = await get(wheelStore)
    this.addWheel(wheels)
  }
}
