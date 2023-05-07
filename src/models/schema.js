export const schema = {
    "models": {
        "MeetsModel": {
            "name": "MeetsModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "creator_id": {
                    "name": "creator_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "meet_creator": {
                    "name": "meet_creator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "meet_name": {
                    "name": "meet_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "start_time": {
                    "name": "start_time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "end_time": {
                    "name": "end_time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "classes": {
                    "name": "classes",
                    "isArray": true,
                    "type": {
                        "enum": "ClassesEnum"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "attendants": {
                    "name": "attendants",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "image_key": {
                    "name": "image_key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MeetsModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UsersModel": {
            "name": "UsersModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "cognito_id": {
                    "name": "cognito_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "major": {
                    "name": "major",
                    "isArray": true,
                    "type": {
                        "enum": "MajorsEnum"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "classes": {
                    "name": "classes",
                    "isArray": true,
                    "type": {
                        "enum": "ClassesEnum"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "created_meets": {
                    "name": "created_meets",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "attending_meets": {
                    "name": "attending_meets",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "image_key": {
                    "name": "image_key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UsersModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "ClassesEnum": {
            "name": "ClassesEnum",
            "values": [
                "CSS360",
                "CSS342",
                "CSS101",
                "CSS107",
                "CSS112",
                "CSS132",
                "CSS142",
                "CSS143",
                "CSS198",
                "CSS199",
                "CSS211",
                "CSS295",
                "CSS301",
                "CSS310",
                "CSS370",
                "CSS371",
                "CSS390",
                "CSS399",
                "CSS475",
                "CSS497",
                "CSS430",
                "CSS422",
                "CSS986",
                "BIS300",
                "MAT301",
                "CMS301",
                "INF201",
                "BIO210",
                "ENG280",
                "PSY101",
                "CHM160",
                "POL320",
                "ACT200",
                "ECO101",
                "PHY121",
                "HIS202",
                "SOC210",
                "ART110",
                "GEO300",
                "PHI220",
                "ANT101",
                "MKT310",
                "CSE143",
                "NUR240",
                "MUS250",
                "PSY310",
                "CHE340",
                "ENG370",
                "ECO410",
                "MTH480",
                "BCH201",
                "PSC410",
                "PHY410",
                "HMB310",
                "CSE412",
                "ENG330",
                "MUS240",
                "AED320",
                "CHE400",
                "SOC460",
                "THE340",
                "PLC310",
                "PSY430",
                "COM360",
                "PHT320",
                "ART410",
                "ENW200",
                "ENV420",
                "MTH310",
                "CSE460",
                "BIO420",
                "NUP430",
                "LIN410",
                "CIE310",
                "GDS200",
                "CBL420",
                "BUS410",
                "HIS420",
                "ENL440",
                "ART350",
                "TPR360",
                "PHY370",
                "MTH390",
                "MUC420",
                "BIT410",
                "NUE420",
                "PSR430",
                "CEN420",
                "SOC430",
                "ENT440",
                "PSC460",
                "CHR480",
                "PED430",
                "BUM420",
                "HIT430",
                "PYT440",
                "CRR440",
                "NUR450",
                "MTR470",
                "BIM470",
                "CSM470",
                "ENR480",
                "CPH480",
                "EDM490",
                "PHT490",
                "BUR490",
                "ARR490",
                "PYM490",
                "SCM490"
            ]
        },
        "MajorsEnum": {
            "name": "MajorsEnum",
            "values": [
                "CSSE",
                "IMD",
                "MATH"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.2.0",
    "version": "a6a6d194ee7bed39e860f41f8d9ccfa5"
};