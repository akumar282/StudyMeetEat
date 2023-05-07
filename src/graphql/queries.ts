/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMeetsModel = /* GraphQL */ `
  query GetMeetsModel($id: ID!) {
    getMeetsModel(id: $id) {
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
export const listMeetsModels = /* GraphQL */ `
  query ListMeetsModels(
    $filter: ModelMeetsModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetsModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMeetsModels = /* GraphQL */ `
  query SyncMeetsModels(
    $filter: ModelMeetsModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMeetsModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const searchMeetsModels = /* GraphQL */ `
  query SearchMeetsModels(
    $filter: SearchableMeetsModelFilterInput
    $sort: [SearchableMeetsModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMeetsModelAggregationInput]
  ) {
    searchMeetsModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getUsersModel = /* GraphQL */ `
  query GetUsersModel($id: ID!) {
    getUsersModel(id: $id) {
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
export const listUsersModels = /* GraphQL */ `
  query ListUsersModels(
    $filter: ModelUsersModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsersModels = /* GraphQL */ `
  query SyncUsersModels(
    $filter: ModelUsersModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const searchUsersModels = /* GraphQL */ `
  query SearchUsersModels(
    $filter: SearchableUsersModelFilterInput
    $sort: [SearchableUsersModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUsersModelAggregationInput]
  ) {
    searchUsersModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
