import { Storage } from 'aws-amplify'

export async function uploadImage(file: File): Promise<string> {
  const filename = `${Date.now()}-${file.name}`
  const result = await Storage.put(filename, file, {
    contentType: file.type
  })
  return result.key
}

export async function getImage(key: string): Promise<string> {
  const url = await Storage.get(key, { expires: 604800 })
  return url
}