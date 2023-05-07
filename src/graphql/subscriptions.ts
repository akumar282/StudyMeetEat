/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMeetsModel = /* GraphQL */ `
  subscription OnCreateMeetsModel(
    $filter: ModelSubscriptionMeetsModelFilterInput
  ) {
    onCreateMeetsModel(filter: $filter) {
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
export const onUpdateMeetsModel = /* GraphQL */ `
  subscription OnUpdateMeetsModel(
    $filter: ModelSubscriptionMeetsModelFilterInput
  ) {
    onUpdateMeetsModel(filter: $filter) {
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
export const onDeleteMeetsModel = /* GraphQL */ `
  subscription OnDeleteMeetsModel(
    $filter: ModelSubscriptionMeetsModelFilterInput
  ) {
    onDeleteMeetsModel(filter: $filter) {
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
export const onCreateUsersModel = /* GraphQL */ `
  subscription OnCreateUsersModel(
    $filter: ModelSubscriptionUsersModelFilterInput
  ) {
    onCreateUsersModel(filter: $filter) {
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
export const onUpdateUsersModel = /* GraphQL */ `
  subscription OnUpdateUsersModel(
    $filter: ModelSubscriptionUsersModelFilterInput
  ) {
    onUpdateUsersModel(filter: $filter) {
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
export const onDeleteUsersModel = /* GraphQL */ `
  subscription OnDeleteUsersModel(
    $filter: ModelSubscriptionUsersModelFilterInput
  ) {
    onDeleteUsersModel(filter: $filter) {
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
