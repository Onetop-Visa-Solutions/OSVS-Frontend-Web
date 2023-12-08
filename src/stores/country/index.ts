import { defineStore } from 'pinia'
import { type Country } from '/@src/types'
export const useCountryStore = defineStore("country", () => {
  const allCountries: Country[] = reactive([])


  // Fetch Countries Data
  const fetchCountries = async () => {
    const apiResponse = await fetch(
      'https://run.mocky.io/v3/5715b4ad-9706-4cdc-9ecf-7c986e261812'
      )
      const countries = await apiResponse.json()
      allCountries.push(...countries)
      localStorage.setItem("countries", JSON.stringify(allCountries))

  }
  return {allCountries,fetchCountries}
})
