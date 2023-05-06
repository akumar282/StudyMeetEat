import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";

export enum ClassesEnum {
  CSS360 = "CSS360",
  CSS342 = "CSS342"
}

export enum MajorsEnum {
  CSSE = "CSSE",
  IMD = "IMD",
  MATH = "MATH"
}



type EagerMeetsModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MeetsModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly creator_id: string;
  readonly meet_creator: string;
  readonly meet_name: string;
  readonly location: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly classes?: (ClassesEnum | null)[] | keyof typeof ClassesEnum | null;
  readonly attendants?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeetsModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MeetsModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly creator_id: string;
  readonly meet_creator: string;
  readonly meet_name: string;
  readonly location: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly classes?: (ClassesEnum | null)[] | keyof typeof ClassesEnum | null;
  readonly attendants?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MeetsModel = LazyLoading extends LazyLoadingDisabled ? EagerMeetsModel : LazyMeetsModel

export declare const MeetsModel: (new (init: ModelInit<MeetsModel>) => MeetsModel) & {
  copyOf(source: MeetsModel, mutator: (draft: MutableModel<MeetsModel>) => MutableModel<MeetsModel> | void): MeetsModel;
}

type EagerUsersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognito_id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly username: string;
  readonly major?: (MajorsEnum | null)[] | keyof typeof MajorsEnum | null;
  readonly classes?: (ClassesEnum | null)[] | keyof typeof ClassesEnum | null;
  readonly created_meets?: (string | null)[] | null;
  readonly attending_meets?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognito_id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly username: string;
  readonly major?: (MajorsEnum | null)[] | keyof typeof MajorsEnum | null;
  readonly classes?: (ClassesEnum | null)[] | keyof typeof ClassesEnum | null;
  readonly created_meets?: (string | null)[] | null;
  readonly attending_meets?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersModel = LazyLoading extends LazyLoadingDisabled ? EagerUsersModel : LazyUsersModel

export declare const UsersModel: (new (init: ModelInit<UsersModel>) => UsersModel) & {
  copyOf(source: UsersModel, mutator: (draft: MutableModel<UsersModel>) => MutableModel<UsersModel> | void): UsersModel;
}