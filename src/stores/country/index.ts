import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/8338f66a-4afa-44b1-8be8-cb4d4ab5169a'
    )
    const countries = await apiResponse.json()
    allCountries.push(...countries)

  }
  return {allCountries,fetchCountries}
})
