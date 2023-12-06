import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/6a4c130d-7e3e-4a49-bcaa-813b8269f412'
      )
      const countries = await apiResponse.json()
      allCountries.push(...countries)
      localStorage.setItem("countries", JSON.stringify(allCountries))

  }
  return {allCountries,fetchCountries}
})
