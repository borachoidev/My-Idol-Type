export const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY
export const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID
export const GA_TRACKING_ID = process.env.NEXT_PIBLIC_GA_TRACKING_ID
const PRODUCTION = process.env.NODE_ENV === 'production'
export const MAIN_IMG_CDN = PRODUCTION
  ? 'https://rawcdn.githack.com/borachoidev/My-Idol-Type/refactor/image/public/images/main.gif?raw=true'
  : 'https://raw.githack.com/borachoidev/My-Idol-Type/refactor/image/public/images/main.gif?raw=true'
