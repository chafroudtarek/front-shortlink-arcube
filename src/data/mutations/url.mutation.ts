import { useMutation } from "@tanstack/react-query"
import { generateShortUrl } from "../services/url.service"



export const useGenerateShortUrl = () => {
    return useMutation({
      mutationFn: (url:string) => generateShortUrl(url),
      onSuccess: () => {
       
      },
      onError: () => {
      }
    })
  }
