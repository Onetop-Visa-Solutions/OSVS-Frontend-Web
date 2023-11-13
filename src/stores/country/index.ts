import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/54126025-a3e3-4bf8-b1bf-48e6f2a987b5'
    )
    const countries = await apiResponse.json()
    allCountries.push(...countries)

  }
  return {allCountries,fetchCountries}
})
