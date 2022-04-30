type UsePictureParams = {
  webp?: boolean
  width?: number
  height?: number
  quality?: number
}

export default (url: string, params: UsePictureParams = {}) => {
  const pictureURL = new URL(url)
  for (const paramKey in params) {
    /** @ts-expect-error param is one key of UsePictureParams */
    const param = String(params[paramKey])
    pictureURL.searchParams.append(paramKey, param)
  }
  return pictureURL.toString()
}
