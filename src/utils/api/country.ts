import sleep from '/@src/utils/sleep'
import { useCountryStore } from '/@src/stores/country'
const country = useCountryStore()
const allCountries = country.allCountries

export async function getCountry(slug: string) {
  const product = allCountries.find((country: any) => country.slug === slug)

  // simulate api call
  await sleep(200)

  if (!product) {
    return Promise.reject(new Error(`Job ${slug} not found`))
  }

  return Promise.resolve(product)
}

export async function getNfts() {
  // simulate api call
  await sleep(200)

  return Promise.resolve(allCountries.map((product: any) => product))
}
