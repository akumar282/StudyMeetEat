import { API } from 'aws-amplify'
import { getUsersModel } from '../../graphql/queries'

export async function getUserById(id: string) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: getUsersModel,
      variables: { id }
    }
  )
}
