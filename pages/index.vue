<template>
  <div>
    <div>Wheels: {{ wheels }}</div>
    <div>Axels: {{ axles }}</div>
    <div>
      <button @click="puncture()">Puncture</button>
      <button @click="fetchNewWheels()">Fetch</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getVehicleModule } from '~/store'

@Component
export default class IndexPage extends Vue {
  get wheels(): number {
    return getVehicleModule(this.$store).wheels
  }

  get axles(): number {
    return getVehicleModule(this.$store).axles
  }

  puncture(): void {
    getVehicleModule(this.$store).puncture(1)
  }

  async fetchNewWheels(): Promise<void> {
    await getVehicleModule(this.$store).fetchNewWheels('A')
  }
}
</script>
