import { API } from 'aws-amplify'
import { 
  createMeetsModel, 
  deleteMeetsModel, 
  updateMeetsModel 
} from '../../graphql/mutations'
import {
  CreateMeetsModelInput,
  UpdateMeetsModelInput,
  DeleteMeetsModelInput,
} from '../../API'

export async function createMeet(meet: { input: CreateMeetsModelInput }) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createMeetsModel,
      variables: meet
    }
  )
}

export async function updateMeet(meet: { input: UpdateMeetsModelInput }) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: updateMeetsModel,
      variables: meet
    }
  )
}

export async function deleteMeet(meet: { input: DeleteMeetsModelInput }) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: deleteMeetsModel,
      variables: meet
    }
  )
}