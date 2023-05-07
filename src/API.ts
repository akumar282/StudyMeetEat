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
  image_key?: string | null,
  description?: string | null,
  _version?: number | null,
};

export enum ClassesEnum {
  CSS360 = "CSS360",
  CSS342 = "CSS342",
  CSS101 = "CSS101",
  CSS107 = "CSS107",
  CSS112 = "CSS112",
  CSS132 = "CSS132",
  CSS142 = "CSS142",
  CSS143 = "CSS143",
  CSS198 = "CSS198",
  CSS199 = "CSS199",
  CSS211 = "CSS211",
  CSS295 = "CSS295",
  CSS301 = "CSS301",
  CSS310 = "CSS310",
  CSS370 = "CSS370",
  CSS371 = "CSS371",
  CSS390 = "CSS390",
  CSS399 = "CSS399",
  CSS475 = "CSS475",
  CSS497 = "CSS497",
  CSS430 = "CSS430",
  CSS422 = "CSS422",
  CSS986 = "CSS986",
  BIS300 = "BIS300",
  MAT301 = "MAT301",
  CMS301 = "CMS301",
  INF201 = "INF201",
  BIO210 = "BIO210",
  ENG280 = "ENG280",
  PSY101 = "PSY101",
  CHM160 = "CHM160",
  POL320 = "POL320",
  ACT200 = "ACT200",
  ECO101 = "ECO101",
  PHY121 = "PHY121",
  HIS202 = "HIS202",
  SOC210 = "SOC210",
  ART110 = "ART110",
  GEO300 = "GEO300",
  PHI220 = "PHI220",
  ANT101 = "ANT101",
  MKT310 = "MKT310",
  CSE143 = "CSE143",
  NUR240 = "NUR240",
  MUS250 = "MUS250",
  PSY310 = "PSY310",
  CHE340 = "CHE340",
  ENG370 = "ENG370",
  ECO410 = "ECO410",
  MTH480 = "MTH480",
  BCH201 = "BCH201",
  PSC410 = "PSC410",
  PHY410 = "PHY410",
  HMB310 = "HMB310",
  CSE412 = "CSE412",
  ENG330 = "ENG330",
  MUS240 = "MUS240",
  AED320 = "AED320",
  CHE400 = "CHE400",
  SOC460 = "SOC460",
  THE340 = "THE340",
  PLC310 = "PLC310",
  PSY430 = "PSY430",
  COM360 = "COM360",
  PHT320 = "PHT320",
  ART410 = "ART410",
  ENW200 = "ENW200",
  ENV420 = "ENV420",
  MTH310 = "MTH310",
  CSE460 = "CSE460",
  BIO420 = "BIO420",
  NUP430 = "NUP430",
  LIN410 = "LIN410",
  CIE310 = "CIE310",
  GDS200 = "GDS200",
  CBL420 = "CBL420",
  BUS410 = "BUS410",
  HIS420 = "HIS420",
  ENL440 = "ENL440",
  ART350 = "ART350",
  TPR360 = "TPR360",
  PHY370 = "PHY370",
  MTH390 = "MTH390",
  MUC420 = "MUC420",
  BIT410 = "BIT410",
  NUE420 = "NUE420",
  PSR430 = "PSR430",
  CEN420 = "CEN420",
  SOC430 = "SOC430",
  ENT440 = "ENT440",
  PSC460 = "PSC460",
  CHR480 = "CHR480",
  PED430 = "PED430",
  BUM420 = "BUM420",
  HIT430 = "HIT430",
  PYT440 = "PYT440",
  CRR440 = "CRR440",
  NUR450 = "NUR450",
  MTR470 = "MTR470",
  BIM470 = "BIM470",
  CSM470 = "CSM470",
  ENR480 = "ENR480",
  CPH480 = "CPH480",
  EDM490 = "EDM490",
  PHT490 = "PHT490",
  BUR490 = "BUR490",
  ARR490 = "ARR490",
  PYM490 = "PYM490",
  SCM490 = "SCM490",
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
  image_key?: ModelStringInput | null,
  description?: ModelStringInput | null,
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
  image_key?: string | null,
  description?: string | null,
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
  image_key?: string | null,
  description?: string | null,
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
  image_key?: string | null,
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
  image_key?: ModelStringInput | null,
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
  image_key?: string | null,
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
  image_key?: string | null,
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
  image_key?: ModelStringInput | null,
  description?: ModelStringInput | null,
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
  image_key?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
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
  image_key = "image_key",
  description = "description",
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
  image_key = "image_key",
  description = "description",
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
  image_key?: ModelStringInput | null,
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
  image_key?: SearchableStringFilterInput | null,
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
  image_key = "image_key",
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
  image_key = "image_key",
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
  image_key?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
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
  image_key?: ModelSubscriptionStringInput | null,
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
    image_key?: string | null,
    description?: string | null,
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
    image_key?: string | null,
    description?: string | null,
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
    image_key?: string | null,
    description?: string | null,
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
    image_key?: string | null,
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
    image_key?: string | null,
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
    image_key?: string | null,
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
    image_key?: string | null,
    description?: string | null,
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
      image_key?: string | null,
      description?: string | null,
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
      image_key?: string | null,
      description?: string | null,
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
      image_key?: string | null,
      description?: string | null,
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
    image_key?: string | null,
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
      image_key?: string | null,
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
      image_key?: string | null,
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
      image_key?: string | null,
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
    image_key?: string | null,
    description?: string | null,
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
    image_key?: string | null,
    description?: string | null,
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
    image_key?: string | null,
    description?: string | null,
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
    image_key?: string | null,
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
    image_key?: string | null,
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
    image_key?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
