import planeImg from '~/src/assets/images/Plane.svg'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl

  const getImageUrl = (url: string | undefined): string => {
    if (!url) {
      return planeImg
    }
    if (url.startsWith('http')) {
      return url
    }
    return `${apiUrl}${url}`
  }

  return {
    provide: {
      getImageUrl: getImageUrl
    }
  }
}) 