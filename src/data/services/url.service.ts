import { ApiUrlEnum } from "../../config/api-url.enum"
import { httpClient } from "../../utils/shared-base-http"
import { type UrlApi, type UrlModel, type UrlRequestBody, mapUrlFromApi } from "../models/url"





export async function generateShortUrl(url: string): Promise<UrlModel> {
    const response = await httpClient.post<UrlApi, UrlRequestBody>(ApiUrlEnum.GENERATE_SHORT_URL, {
      body: {
        originalUrl: url
      }
    })
    
    return mapUrlFromApi(response)
  }
