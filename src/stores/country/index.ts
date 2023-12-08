import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/7a38f949-80d6-4a08-bfae-f1188a3a1b6d'
      )
      const countries = await apiResponse.json()
      allCountries.push(...countries)
      localStorage.setItem("countries", JSON.stringify(allCountries))

  }
  return {allCountries,fetchCountries}
})
