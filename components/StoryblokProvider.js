'use client'
/** 1. Tag it as a client component */
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import HeroBlock from './Hero'

const components = {
  page: HeroBlock
}
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: 'SHN4krlv8CPrDaEscXVWbQtt',
  components,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
})

export default function StoryblokProvider({ children }) {
  return children
}
