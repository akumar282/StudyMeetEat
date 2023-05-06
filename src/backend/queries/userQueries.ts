import { API } from 'aws-amplify'
import { ListUsersModelsQueryVariables } from '../../API'
import { getUsersModel, listUsersModels } from '../../graphql/queries'

export async function getUserById(id: string) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: getUsersModel,
      variables: { id }
    }
  )
}

export async function listUsers(userID: ListUsersModelsQueryVariables) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: listUsersModels,
      variables: userID
    }
  )
}
