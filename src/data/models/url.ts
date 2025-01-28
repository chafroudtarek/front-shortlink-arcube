export interface UrlRequestBody {
  originalUrl: string
}

export interface UrlApi {
  originalUrl: string,
  shortUrl: string,
  shortCode: string
}

export interface UrlModel {
  shortUrl: string
}
export const mapUrlFromApi = (data: UrlApi): UrlModel => {
    return {
      shortUrl: data.shortUrl
    }
  }