import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/38ee1cde-0124-4aed-a6c5-a90fc2b0d433'
    )
    const countries = await apiResponse.json()
    allCountries.push(...countries)

  }
  return {allCountries,fetchCountries}
})
