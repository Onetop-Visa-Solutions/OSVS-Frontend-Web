import { type Country } from './../../types/index.d';
import sleep from '/@src/utils/sleep'
import { useCountryStore } from '/@src/stores/country'
const countryData = useCountryStore()
const allCountries = countryData.allCountries

export async function getCountry(slug: string) {
  const country = allCountries.find((country: Country) => country.slug === slug)

  // simulate api call
  await sleep(200)

  if (!country) {
    return Promise.reject(new Error(`Country ${slug} not found`))
  }

  return Promise.resolve(country)
}


export async function getRequirement(slug: string, id: string) {
  console.log(id);
  const temp_index = parseInt(id);
  const country = allCountries.find((country: Country) => country.educationalPackage.requirements[temp_index].slug === slug)
  // simulate api call
  await sleep(200)

  if (!country) {
    return Promise.reject(new Error(`Country ${id} not found`))
  }

  return Promise.resolve(country.educationalPackage.requirements[temp_index])
}
