/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMeetsModel = /* GraphQL */ `
  mutation CreateMeetsModel(
    $input: CreateMeetsModelInput!
    $condition: ModelMeetsModelConditionInput
  ) {
    createMeetsModel(input: $input, condition: $condition) {
      id
      creator_id
      meet_creator
      meet_name
      location
      start_time
      end_time
      classes
      attendants
      image_key
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMeetsModel = /* GraphQL */ `
  mutation UpdateMeetsModel(
    $input: UpdateMeetsModelInput!
    $condition: ModelMeetsModelConditionInput
  ) {
    updateMeetsModel(input: $input, condition: $condition) {
      id
      creator_id
      meet_creator
      meet_name
      location
      start_time
      end_time
      classes
      attendants
      image_key
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMeetsModel = /* GraphQL */ `
  mutation DeleteMeetsModel(
    $input: DeleteMeetsModelInput!
    $condition: ModelMeetsModelConditionInput
  ) {
    deleteMeetsModel(input: $input, condition: $condition) {
      id
      creator_id
      meet_creator
      meet_name
      location
      start_time
      end_time
      classes
      attendants
      image_key
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUsersModel = /* GraphQL */ `
  mutation CreateUsersModel(
    $input: CreateUsersModelInput!
    $condition: ModelUsersModelConditionInput
  ) {
    createUsersModel(input: $input, condition: $condition) {
      id
      cognito_id
      first_name
      last_name
      email
      username
      major
      classes
      created_meets
      attending_meets
      image_key
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUsersModel = /* GraphQL */ `
  mutation UpdateUsersModel(
    $input: UpdateUsersModelInput!
    $condition: ModelUsersModelConditionInput
  ) {
    updateUsersModel(input: $input, condition: $condition) {
      id
      cognito_id
      first_name
      last_name
      email
      username
      major
      classes
      created_meets
      attending_meets
      image_key
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUsersModel = /* GraphQL */ `
  mutation DeleteUsersModel(
    $input: DeleteUsersModelInput!
    $condition: ModelUsersModelConditionInput
  ) {
    deleteUsersModel(input: $input, condition: $condition) {
      id
      cognito_id
      first_name
      last_name
      email
      username
      major
      classes
      created_meets
      attending_meets
      image_key
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
