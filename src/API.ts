/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMeetsModelInput = {
  id?: string | null,
  creator_id: string,
  meet_creator: string,
  meet_name: string,
  location: string,
  start_time: string,
  end_time: string,
  classes?: Array< ClassesEnum | null > | null,
  attendants?: Array< string | null > | null,
  _version?: number | null,
};

export enum ClassesEnum {
  CSS360 = "CSS360",
  CSS342 = "CSS342",
}


export type ModelMeetsModelConditionInput = {
  creator_id?: ModelIDInput | null,
  meet_creator?: ModelStringInput | null,
  meet_name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  classes?: ModelClassesEnumListInput | null,
  attendants?: ModelIDInput | null,
  and?: Array< ModelMeetsModelConditionInput | null > | null,
  or?: Array< ModelMeetsModelConditionInput | null > | null,
  not?: ModelMeetsModelConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelClassesEnumListInput = {
  eq?: Array< ClassesEnum | null > | null,
  ne?: Array< ClassesEnum | null > | null,
  contains?: ClassesEnum | null,
  notContains?: ClassesEnum | null,
};

export type MeetsModel = {
  __typename: "MeetsModel",
  id: string,
  creator_id: string,
  meet_creator: string,
  meet_name: string,
  location: string,
  start_time: string,
  end_time: string,
  classes?: Array< ClassesEnum | null > | null,
  attendants?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMeetsModelInput = {
  id: string,
  creator_id?: string | null,
  meet_creator?: string | null,
  meet_name?: string | null,
  location?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  classes?: Array< ClassesEnum | null > | null,
  attendants?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteMeetsModelInput = {
  id: string,
  _version?: number | null,
};

export type CreateUsersModelInput = {
  id?: string | null,
  cognito_id: string,
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  major?: Array< MajorsEnum | null > | null,
  classes?: Array< ClassesEnum | null > | null,
  created_meets?: Array< string | null > | null,
  attending_meets?: Array< string | null > | null,
  _version?: number | null,
};

export enum MajorsEnum {
  CSSE = "CSSE",
  IMD = "IMD",
  MATH = "MATH",
}


export type ModelUsersModelConditionInput = {
  cognito_id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  major?: ModelMajorsEnumListInput | null,
  classes?: ModelClassesEnumListInput | null,
  created_meets?: ModelIDInput | null,
  attending_meets?: ModelIDInput | null,
  and?: Array< ModelUsersModelConditionInput | null > | null,
  or?: Array< ModelUsersModelConditionInput | null > | null,
  not?: ModelUsersModelConditionInput | null,
};

export type ModelMajorsEnumListInput = {
  eq?: Array< MajorsEnum | null > | null,
  ne?: Array< MajorsEnum | null > | null,
  contains?: MajorsEnum | null,
  notContains?: MajorsEnum | null,
};

export type UsersModel = {
  __typename: "UsersModel",
  id: string,
  cognito_id: string,
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  major?: Array< MajorsEnum | null > | null,
  classes?: Array< ClassesEnum | null > | null,
  created_meets?: Array< string | null > | null,
  attending_meets?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUsersModelInput = {
  id: string,
  cognito_id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  username?: string | null,
  major?: Array< MajorsEnum | null > | null,
  classes?: Array< ClassesEnum | null > | null,
  created_meets?: Array< string | null > | null,
  attending_meets?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteUsersModelInput = {
  id: string,
  _version?: number | null,
};

export type ModelMeetsModelFilterInput = {
  id?: ModelIDInput | null,
  creator_id?: ModelIDInput | null,
  meet_creator?: ModelStringInput | null,
  meet_name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  classes?: ModelClassesEnumListInput | null,
  attendants?: ModelIDInput | null,
  and?: Array< ModelMeetsModelFilterInput | null > | null,
  or?: Array< ModelMeetsModelFilterInput | null > | null,
  not?: ModelMeetsModelFilterInput | null,
};

export type ModelMeetsModelConnection = {
  __typename: "ModelMeetsModelConnection",
  items:  Array<MeetsModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SearchableMeetsModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  creator_id?: SearchableIDFilterInput | null,
  meet_creator?: SearchableStringFilterInput | null,
  meet_name?: SearchableStringFilterInput | null,
  location?: SearchableStringFilterInput | null,
  start_time?: SearchableStringFilterInput | null,
  end_time?: SearchableStringFilterInput | null,
  attendants?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
  classes?: SearchableStringFilterInput | null,
  and?: Array< SearchableMeetsModelFilterInput | null > | null,
  or?: Array< SearchableMeetsModelFilterInput | null > | null,
  not?: SearchableMeetsModelFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableMeetsModelSortInput = {
  field?: SearchableMeetsModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableMeetsModelSortableFields {
  id = "id",
  creator_id = "creator_id",
  meet_creator = "meet_creator",
  meet_name = "meet_name",
  location = "location",
  start_time = "start_time",
  end_time = "end_time",
  attendants = "attendants",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableMeetsModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableMeetsModelAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableMeetsModelAggregateField {
  id = "id",
  creator_id = "creator_id",
  meet_creator = "meet_creator",
  meet_name = "meet_name",
  location = "location",
  start_time = "start_time",
  end_time = "end_time",
  classes = "classes",
  attendants = "attendants",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableMeetsModelConnection = {
  __typename: "SearchableMeetsModelConnection",
  items:  Array<MeetsModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelUsersModelFilterInput = {
  id?: ModelIDInput | null,
  cognito_id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  major?: ModelMajorsEnumListInput | null,
  classes?: ModelClassesEnumListInput | null,
  created_meets?: ModelIDInput | null,
  attending_meets?: ModelIDInput | null,
  and?: Array< ModelUsersModelFilterInput | null > | null,
  or?: Array< ModelUsersModelFilterInput | null > | null,
  not?: ModelUsersModelFilterInput | null,
};

export type ModelUsersModelConnection = {
  __typename: "ModelUsersModelConnection",
  items:  Array<UsersModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SearchableUsersModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  cognito_id?: SearchableIDFilterInput | null,
  first_name?: SearchableStringFilterInput | null,
  last_name?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  username?: SearchableStringFilterInput | null,
  created_meets?: SearchableIDFilterInput | null,
  attending_meets?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
  major?: SearchableStringFilterInput | null,
  classes?: SearchableStringFilterInput | null,
  and?: Array< SearchableUsersModelFilterInput | null > | null,
  or?: Array< SearchableUsersModelFilterInput | null > | null,
  not?: SearchableUsersModelFilterInput | null,
};

export type SearchableUsersModelSortInput = {
  field?: SearchableUsersModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUsersModelSortableFields {
  id = "id",
  cognito_id = "cognito_id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  username = "username",
  created_meets = "created_meets",
  attending_meets = "attending_meets",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableUsersModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUsersModelAggregateField,
};

export enum SearchableUsersModelAggregateField {
  id = "id",
  cognito_id = "cognito_id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  username = "username",
  major = "major",
  classes = "classes",
  created_meets = "created_meets",
  attending_meets = "attending_meets",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableUsersModelConnection = {
  __typename: "SearchableUsersModelConnection",
  items:  Array<UsersModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelSubscriptionMeetsModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  creator_id?: ModelSubscriptionIDInput | null,
  meet_creator?: ModelSubscriptionStringInput | null,
  meet_name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  start_time?: ModelSubscriptionStringInput | null,
  end_time?: ModelSubscriptionStringInput | null,
  classes?: ModelSubscriptionStringInput | null,
  attendants?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMeetsModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionMeetsModelFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUsersModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognito_id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  major?: ModelSubscriptionStringInput | null,
  classes?: ModelSubscriptionStringInput | null,
  created_meets?: ModelSubscriptionIDInput | null,
  attending_meets?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
};

export type CreateMeetsModelMutationVariables = {
  input: CreateMeetsModelInput,
  condition?: ModelMeetsModelConditionInput | null,
};

export type CreateMeetsModelMutation = {
  createMeetsModel?:  {
    __typename: "MeetsModel",
    id: string,
    creator_id: string,
    meet_creator: string,
    meet_name: string,
    location: string,
    start_time: string,
    end_time: string,
    classes?: Array< ClassesEnum | null > | null,
    attendants?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMeetsModelMutationVariables = {
  input: UpdateMeetsModelInput,
  condition?: ModelMeetsModelConditionInput | null,
};

export type UpdateMeetsModelMutation = {
  updateMeetsModel?:  {
    __typename: "MeetsModel",
    id: string,
    creator_id: string,
    meet_creator: string,
    meet_name: string,
    location: string,
    start_time: string,
    end_time: string,
    classes?: Array< ClassesEnum | null > | null,
    attendants?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMeetsModelMutationVariables = {
  input: DeleteMeetsModelInput,
  condition?: ModelMeetsModelConditionInput | null,
};

export type DeleteMeetsModelMutation = {
  deleteMeetsModel?:  {
    __typename: "MeetsModel",
    id: string,
    creator_id: string,
    meet_creator: string,
    meet_name: string,
    location: string,
    start_time: string,
    end_time: string,
    classes?: Array< ClassesEnum | null > | null,
    attendants?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUsersModelMutationVariables = {
  input: CreateUsersModelInput,
  condition?: ModelUsersModelConditionInput | null,
};

export type CreateUsersModelMutation = {
  createUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    cognito_id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    major?: Array< MajorsEnum | null > | null,
    classes?: Array< ClassesEnum | null > | null,
    created_meets?: Array< string | null > | null,
    attending_meets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUsersModelMutationVariables = {
  input: UpdateUsersModelInput,
  condition?: ModelUsersModelConditionInput | null,
};

export type UpdateUsersModelMutation = {
  updateUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    cognito_id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    major?: Array< MajorsEnum | null > | null,
    classes?: Array< ClassesEnum | null > | null,
    created_meets?: Array< string | null > | null,
    attending_meets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUsersModelMutationVariables = {
  input: DeleteUsersModelInput,
  condition?: ModelUsersModelConditionInput | null,
};

export type DeleteUsersModelMutation = {
  deleteUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    cognito_id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    major?: Array< MajorsEnum | null > | null,
    classes?: Array< ClassesEnum | null > | null,
    created_meets?: Array< string | null > | null,
    attending_meets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetMeetsModelQueryVariables = {
  id: string,
};

export type GetMeetsModelQuery = {
  getMeetsModel?:  {
    __typename: "MeetsModel",
    id: string,
    creator_id: string,
    meet_creator: string,
    meet_name: string,
    location: string,
    start_time: string,
    end_time: string,
    classes?: Array< ClassesEnum | null > | null,
    attendants?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMeetsModelsQueryVariables = {
  filter?: ModelMeetsModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMeetsModelsQuery = {
  listMeetsModels?:  {
    __typename: "ModelMeetsModelConnection",
    items:  Array< {
      __typename: "MeetsModel",
      id: string,
      creator_id: string,
      meet_creator: string,
      meet_name: string,
      location: string,
      start_time: string,
      end_time: string,
      classes?: Array< ClassesEnum | null > | null,
      attendants?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMeetsModelsQueryVariables = {
  filter?: ModelMeetsModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMeetsModelsQuery = {
  syncMeetsModels?:  {
    __typename: "ModelMeetsModelConnection",
    items:  Array< {
      __typename: "MeetsModel",
      id: string,
      creator_id: string,
      meet_creator: string,
      meet_name: string,
      location: string,
      start_time: string,
      end_time: string,
      classes?: Array< ClassesEnum | null > | null,
      attendants?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SearchMeetsModelsQueryVariables = {
  filter?: SearchableMeetsModelFilterInput | null,
  sort?: Array< SearchableMeetsModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableMeetsModelAggregationInput | null > | null,
};

export type SearchMeetsModelsQuery = {
  searchMeetsModels?:  {
    __typename: "SearchableMeetsModelConnection",
    items:  Array< {
      __typename: "MeetsModel",
      id: string,
      creator_id: string,
      meet_creator: string,
      meet_name: string,
      location: string,
      start_time: string,
      end_time: string,
      classes?: Array< ClassesEnum | null > | null,
      attendants?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetUsersModelQueryVariables = {
  id: string,
};

export type GetUsersModelQuery = {
  getUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    cognito_id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    major?: Array< MajorsEnum | null > | null,
    classes?: Array< ClassesEnum | null > | null,
    created_meets?: Array< string | null > | null,
    attending_meets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersModelsQueryVariables = {
  filter?: ModelUsersModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersModelsQuery = {
  listUsersModels?:  {
    __typename: "ModelUsersModelConnection",
    items:  Array< {
      __typename: "UsersModel",
      id: string,
      cognito_id: string,
      first_name: string,
      last_name: string,
      email: string,
      username: string,
      major?: Array< MajorsEnum | null > | null,
      classes?: Array< ClassesEnum | null > | null,
      created_meets?: Array< string | null > | null,
      attending_meets?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersModelsQueryVariables = {
  filter?: ModelUsersModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersModelsQuery = {
  syncUsersModels?:  {
    __typename: "ModelUsersModelConnection",
    items:  Array< {
      __typename: "UsersModel",
      id: string,
      cognito_id: string,
      first_name: string,
      last_name: string,
      email: string,
      username: string,
      major?: Array< MajorsEnum | null > | null,
      classes?: Array< ClassesEnum | null > | null,
      created_meets?: Array< string | null > | null,
      attending_meets?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SearchUsersModelsQueryVariables = {
  filter?: SearchableUsersModelFilterInput | null,
  sort?: Array< SearchableUsersModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUsersModelAggregationInput | null > | null,
};

export type SearchUsersModelsQuery = {
  searchUsersModels?:  {
    __typename: "SearchableUsersModelConnection",
    items:  Array< {
      __typename: "UsersModel",
      id: string,
      cognito_id: string,
      first_name: string,
      last_name: string,
      email: string,
      username: string,
      major?: Array< MajorsEnum | null > | null,
      classes?: Array< ClassesEnum | null > | null,
      created_meets?: Array< string | null > | null,
      attending_meets?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type OnCreateMeetsModelSubscriptionVariables = {
  filter?: ModelSubscriptionMeetsModelFilterInput | null,
};

export type OnCreateMeetsModelSubscription = {
  onCreateMeetsModel?:  {
    __typename: "MeetsModel",
    id: string,
    creator_id: string,
    meet_creator: string,
    meet_name: string,
    location: string,
    start_time: string,
    end_time: string,
    classes?: Array< ClassesEnum | null > | null,
    attendants?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMeetsModelSubscriptionVariables = {
  filter?: ModelSubscriptionMeetsModelFilterInput | null,
};

export type OnUpdateMeetsModelSubscription = {
  onUpdateMeetsModel?:  {
    __typename: "MeetsModel",
    id: string,
    creator_id: string,
    meet_creator: string,
    meet_name: string,
    location: string,
    start_time: string,
    end_time: string,
    classes?: Array< ClassesEnum | null > | null,
    attendants?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMeetsModelSubscriptionVariables = {
  filter?: ModelSubscriptionMeetsModelFilterInput | null,
};

export type OnDeleteMeetsModelSubscription = {
  onDeleteMeetsModel?:  {
    __typename: "MeetsModel",
    id: string,
    creator_id: string,
    meet_creator: string,
    meet_name: string,
    location: string,
    start_time: string,
    end_time: string,
    classes?: Array< ClassesEnum | null > | null,
    attendants?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUsersModelSubscriptionVariables = {
  filter?: ModelSubscriptionUsersModelFilterInput | null,
};

export type OnCreateUsersModelSubscription = {
  onCreateUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    cognito_id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    major?: Array< MajorsEnum | null > | null,
    classes?: Array< ClassesEnum | null > | null,
    created_meets?: Array< string | null > | null,
    attending_meets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUsersModelSubscriptionVariables = {
  filter?: ModelSubscriptionUsersModelFilterInput | null,
};

export type OnUpdateUsersModelSubscription = {
  onUpdateUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    cognito_id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    major?: Array< MajorsEnum | null > | null,
    classes?: Array< ClassesEnum | null > | null,
    created_meets?: Array< string | null > | null,
    attending_meets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUsersModelSubscriptionVariables = {
  filter?: ModelSubscriptionUsersModelFilterInput | null,
};

export type OnDeleteUsersModelSubscription = {
  onDeleteUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    cognito_id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    major?: Array< MajorsEnum | null > | null,
    classes?: Array< ClassesEnum | null > | null,
    created_meets?: Array< string | null > | null,
    attending_meets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
