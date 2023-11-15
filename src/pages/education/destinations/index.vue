<template>
  <div>
    <Section>
      <Container>
        <CountryCardGrid :content="countriesList" />
      </Container>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { useCountryStore } from '/@src/stores/country'
const country = useCountryStore()

const countriesList = country.allCountries

</script>

