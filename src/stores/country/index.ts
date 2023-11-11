import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = []

  return {allCountries}
})
