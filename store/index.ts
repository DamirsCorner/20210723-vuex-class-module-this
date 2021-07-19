import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import VehicleModule from './vehicle'

export function getVehicleModule(store: Store<any>): VehicleModule {
  return getModule(VehicleModule, store)
}
