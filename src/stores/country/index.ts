import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/039f73f2-a5e0-45e3-b081-25e30476e53a'
    )
    const countries = await apiResponse.json()
    allCountries.push(...countries)

  }
  return {allCountries,fetchCountries}
})
