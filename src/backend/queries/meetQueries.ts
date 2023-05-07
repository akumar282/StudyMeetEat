import { API } from 'aws-amplify'
import { ListMeetsModelsQueryVariables } from '../../API'
import { getMeetsModel, listMeetsModels } from '../../graphql/queries'

export async function getMeetById(id: string) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: getMeetsModel,
      variables: { id }
    }
  )
}

export async function listMeets(userID: ListMeetsModelsQueryVariables) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: listMeetsModels,
      variables: userID
    }
  )
}