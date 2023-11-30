import type { RouteLocationRaw } from 'vue-router'
import type { IconBoxColor } from '/@src/components/base/icon/IconBox.vue'

export interface BaseFeature {
  title: string
  text: string
}

export interface SimpleFeature {
  title: string
  text: string
  link: RouteLocationRaw
}

export interface IconFeature {
  title: string
  text: string
  icon: string
  color: IconBoxColor
  link: RouteLocationRaw
}

export interface SimpleIconFeature {
  title: string
  text: string
  icon: string
}

export interface IconService {
  title: string
  text: string
  icon: string
  color: IconBoxColor
  link: RouteLocationRaw
}

export interface ImageFeature {
  title: string
  text: string
  image: string
  darkImage: string
  link: RouteLocationRaw
}

export interface CompleteFeature {
  title: string
  subtitle: string
  text: string
  icon: string
}

export interface BlobFeature {
  title: string
  subtitle: string
  text: string
  image: string
  link: RouteLocationRaw
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface Requirement  {
  title: string
  name: string
  slug: string
  flagImage: string
  index: number
  requirementsList: {
    title: string
    icon: string
    details:{
      name: string
      content: string
    }[]
  }[],additionalRequirements: {
    title: string
    icon: string
    details:{
      name: string
      content: string
    }[]
  }[],
  description: string

}


export interface Country {
  name: string
  alias: string
  slug: string
  flagImage: string
  description: string
  descriptionImages: string[]
  visitPackages: []
  educationalPackage: {
    name: string
    institutions: {
      name: string
      icon: string
      link: string
    }[]
    institutionsDescription: string
    requirements: {
        title: string
        name: string
        slug: string
        flagImage: string
        index: number
        requirementsList: {
          title: string
          icon: string
          detail:{
            name: string
            content: string
          }[]
        }[]
        additionalRequirements: {
          title: string
          icon: string
          detail:{
            name: string
            content: string
          }[]
        }[]
        description: string
    }[]
    requirementsDescription: string
    scholarshipsAndFunding:{
      description: string
      minimumTuitionCost: number
      maximumTuitionCost: number
      averageLivingCost: number
      costLabel: string
      scholarships: {
        name: string
        minimumAmount:number
        maximumAmount: number}[]
    }
  }
  aboutCountry:{
    currency: string
    currencySymbol: string
    advantages: {
      name: string
      image: string
      description: string
    }[]
  }
  testimonialVideo: string

}
