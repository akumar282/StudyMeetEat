import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";

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
  SCM490 = "SCM490"
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
  readonly image_key?: string | null;
  readonly description?: string | null;
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
  readonly image_key?: string | null;
  readonly description?: string | null;
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
  readonly image_key?: string | null;
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
  readonly image_key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersModel = LazyLoading extends LazyLoadingDisabled ? EagerUsersModel : LazyUsersModel

export declare const UsersModel: (new (init: ModelInit<UsersModel>) => UsersModel) & {
  copyOf(source: UsersModel, mutator: (draft: MutableModel<UsersModel>) => MutableModel<UsersModel> | void): UsersModel;
}