import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/96f4c11c-7e82-408d-b787-c439b42c7a9e'
    )
    const countries = await apiResponse.json()
    allCountries.push(...countries)

  }
  return {allCountries,fetchCountries}
})
