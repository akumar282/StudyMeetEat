import { API } from 'aws-amplify'
import { createUsersModel, deleteUsersModel, updateUsersModel } from '../../graphql/mutations'
import {
  CreateUsersModelInput,
  UpdateUsersModelInput,
  DeleteUsersModelInput,
} from '../../API'

export async function createUser(user: { input: CreateUsersModelInput }) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createUsersModel,
      variables: user
    }
  )
}

export async function updateUser(user: { input: UpdateUsersModelInput }) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: updateUsersModel,
      variables: user
    }
  )
}

export async function deleteUser(user: { input: DeleteUsersModelInput }) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: deleteUsersModel,
      variables: user
    }
  )
}