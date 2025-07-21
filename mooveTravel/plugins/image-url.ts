import planeImg from '~/src/assets/images/Plane.svg'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl

  const getImageUrl = (url: string | undefined): string => {
    if (!url) {
      return planeImg
    }
    if (url.startsWith('http')) {
      return url
    }
    return `${strapiUrl}${url}`
  }

  return {
    provide: {
      getImageUrl: getImageUrl
    }
  }
}) 