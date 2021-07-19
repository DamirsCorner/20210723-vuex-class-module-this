import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { get } from '~/services/request'

function validate(_wheelStore: string): boolean {
  return true
}

@Module({ name: 'vehicle', stateFactory: true, namespaced: true })
export default class VehicleModule extends VuexModule {
  wheels: number = 2

  get axles(): number {
    return this.wheels / 2
  }

  @Mutation
  puncture(n: number): void {
    console.log('puncture', { this: this })
    this.wheels = this.wheels - n
  }

  @Mutation
  addWheel(n: number) {
    this.wheels = this.wheels + n
  }

  @Action({ rawError: true })
  async fetchNewWheels(wheelStore: string): Promise<void> {
    console.log('fetchNewWheels', { this: this })
    // other class members are not accessible
    // if (!this.validate(wheelStore)) {
    //   return
    // }
    if (!validate(wheelStore)) {
      return
    }
    const wheels = await get(wheelStore)
    this.addWheel(wheels)
  }

  validate(_wheelStore: string): boolean {
    return true
  }
}
