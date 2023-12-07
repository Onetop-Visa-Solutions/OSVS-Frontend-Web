import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/6ee6b6f8-fce6-442f-a2f5-ee4365e889f5'
      )
      const countries = await apiResponse.json()
      allCountries.push(...countries)
      localStorage.setItem("countries", JSON.stringify(allCountries))

  }
  return {allCountries,fetchCountries}
})
