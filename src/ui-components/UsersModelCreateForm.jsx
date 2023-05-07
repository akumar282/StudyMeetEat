/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UsersModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UsersModelCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cognito_id: "",
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    major: [],
    classes: [],
    created_meets: [],
    attending_meets: [],
    image_key: "",
  };
  const [cognito_id, setCognito_id] = React.useState(initialValues.cognito_id);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [username, setUsername] = React.useState(initialValues.username);
  const [major, setMajor] = React.useState(initialValues.major);
  const [classes, setClasses] = React.useState(initialValues.classes);
  const [created_meets, setCreated_meets] = React.useState(
    initialValues.created_meets
  );
  const [attending_meets, setAttending_meets] = React.useState(
    initialValues.attending_meets
  );
  const [image_key, setImage_key] = React.useState(initialValues.image_key);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCognito_id(initialValues.cognito_id);
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setEmail(initialValues.email);
    setUsername(initialValues.username);
    setMajor(initialValues.major);
    setCurrentMajorValue("");
    setClasses(initialValues.classes);
    setCurrentClassesValue("");
    setCreated_meets(initialValues.created_meets);
    setCurrentCreated_meetsValue("");
    setAttending_meets(initialValues.attending_meets);
    setCurrentAttending_meetsValue("");
    setImage_key(initialValues.image_key);
    setErrors({});
  };
  const [currentMajorValue, setCurrentMajorValue] = React.useState("");
  const majorRef = React.createRef();
  const [currentClassesValue, setCurrentClassesValue] = React.useState("");
  const classesRef = React.createRef();
  const [currentCreated_meetsValue, setCurrentCreated_meetsValue] =
    React.useState("");
  const created_meetsRef = React.createRef();
  const [currentAttending_meetsValue, setCurrentAttending_meetsValue] =
    React.useState("");
  const attending_meetsRef = React.createRef();
  const getDisplayValue = {
    major: (r) => {
      const enumDisplayValueMap = {
        CSSE: "Csse",
        IMD: "Imd",
        MATH: "Math",
      };
      return enumDisplayValueMap[r];
    },
    classes: (r) => {
      const enumDisplayValueMap = {
        CSS360: "Css360",
        CSS342: "Css342",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    cognito_id: [{ type: "Required" }],
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    email: [{ type: "Required" }],
    username: [{ type: "Required" }],
    major: [],
    classes: [],
    created_meets: [],
    attending_meets: [],
    image_key: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          cognito_id,
          first_name,
          last_name,
          email,
          username,
          major,
          classes,
          created_meets,
          attending_meets,
          image_key,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new UsersModel(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Cognito id"
        isRequired={true}
        isReadOnly={false}
        value={cognito_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognito_id: value,
              first_name,
              last_name,
              email,
              username,
              major,
              classes,
              created_meets,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            value = result?.cognito_id ?? value;
          }
          if (errors.cognito_id?.hasError) {
            runValidationTasks("cognito_id", value);
          }
          setCognito_id(value);
        }}
        onBlur={() => runValidationTasks("cognito_id", cognito_id)}
        errorMessage={errors.cognito_id?.errorMessage}
        hasError={errors.cognito_id?.hasError}
        {...getOverrideProps(overrides, "cognito_id")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name: value,
              last_name,
              email,
              username,
              major,
              classes,
              created_meets,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name: value,
              email,
              username,
              major,
              classes,
              created_meets,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name,
              email: value,
              username,
              major,
              classes,
              created_meets,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name,
              email,
              username: value,
              major,
              classes,
              created_meets,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name,
              email,
              username,
              major: values,
              classes,
              created_meets,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            values = result?.major ?? values;
          }
          setMajor(values);
          setCurrentMajorValue("");
        }}
        currentFieldValue={currentMajorValue}
        label={"Major"}
        items={major}
        hasError={errors?.major?.hasError}
        errorMessage={errors?.major?.errorMessage}
        getBadgeText={getDisplayValue.major}
        setFieldValue={setCurrentMajorValue}
        inputFieldRef={majorRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Major"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentMajorValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.major?.hasError) {
              runValidationTasks("major", value);
            }
            setCurrentMajorValue(value);
          }}
          onBlur={() => runValidationTasks("major", currentMajorValue)}
          errorMessage={errors.major?.errorMessage}
          hasError={errors.major?.hasError}
          ref={majorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "major")}
        >
          <option
            children="Csse"
            value="CSSE"
            {...getOverrideProps(overrides, "majoroption0")}
          ></option>
          <option
            children="Imd"
            value="IMD"
            {...getOverrideProps(overrides, "majoroption1")}
          ></option>
          <option
            children="Math"
            value="MATH"
            {...getOverrideProps(overrides, "majoroption2")}
          ></option>
        </SelectField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name,
              email,
              username,
              major,
              classes: values,
              created_meets,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            values = result?.classes ?? values;
          }
          setClasses(values);
          setCurrentClassesValue("");
        }}
        currentFieldValue={currentClassesValue}
        label={"Classes"}
        items={classes}
        hasError={errors?.classes?.hasError}
        errorMessage={errors?.classes?.errorMessage}
        getBadgeText={getDisplayValue.classes}
        setFieldValue={setCurrentClassesValue}
        inputFieldRef={classesRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Classes"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentClassesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.classes?.hasError) {
              runValidationTasks("classes", value);
            }
            setCurrentClassesValue(value);
          }}
          onBlur={() => runValidationTasks("classes", currentClassesValue)}
          errorMessage={errors.classes?.errorMessage}
          hasError={errors.classes?.hasError}
          ref={classesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "classes")}
        >
          <option
            children="Css360"
            value="CSS360"
            {...getOverrideProps(overrides, "classesoption0")}
          ></option>
          <option
            children="Css342"
            value="CSS342"
            {...getOverrideProps(overrides, "classesoption1")}
          ></option>
        </SelectField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name,
              email,
              username,
              major,
              classes,
              created_meets: values,
              attending_meets,
              image_key,
            };
            const result = onChange(modelFields);
            values = result?.created_meets ?? values;
          }
          setCreated_meets(values);
          setCurrentCreated_meetsValue("");
        }}
        currentFieldValue={currentCreated_meetsValue}
        label={"Created meets"}
        items={created_meets}
        hasError={errors?.created_meets?.hasError}
        errorMessage={errors?.created_meets?.errorMessage}
        setFieldValue={setCurrentCreated_meetsValue}
        inputFieldRef={created_meetsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Created meets"
          isRequired={false}
          isReadOnly={false}
          value={currentCreated_meetsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.created_meets?.hasError) {
              runValidationTasks("created_meets", value);
            }
            setCurrentCreated_meetsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("created_meets", currentCreated_meetsValue)
          }
          errorMessage={errors.created_meets?.errorMessage}
          hasError={errors.created_meets?.hasError}
          ref={created_meetsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "created_meets")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name,
              email,
              username,
              major,
              classes,
              created_meets,
              attending_meets: values,
              image_key,
            };
            const result = onChange(modelFields);
            values = result?.attending_meets ?? values;
          }
          setAttending_meets(values);
          setCurrentAttending_meetsValue("");
        }}
        currentFieldValue={currentAttending_meetsValue}
        label={"Attending meets"}
        items={attending_meets}
        hasError={errors?.attending_meets?.hasError}
        errorMessage={errors?.attending_meets?.errorMessage}
        setFieldValue={setCurrentAttending_meetsValue}
        inputFieldRef={attending_meetsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Attending meets"
          isRequired={false}
          isReadOnly={false}
          value={currentAttending_meetsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.attending_meets?.hasError) {
              runValidationTasks("attending_meets", value);
            }
            setCurrentAttending_meetsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("attending_meets", currentAttending_meetsValue)
          }
          errorMessage={errors.attending_meets?.errorMessage}
          hasError={errors.attending_meets?.hasError}
          ref={attending_meetsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "attending_meets")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Image key"
        isRequired={false}
        isReadOnly={false}
        value={image_key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognito_id,
              first_name,
              last_name,
              email,
              username,
              major,
              classes,
              created_meets,
              attending_meets,
              image_key: value,
            };
            const result = onChange(modelFields);
            value = result?.image_key ?? value;
          }
          if (errors.image_key?.hasError) {
            runValidationTasks("image_key", value);
          }
          setImage_key(value);
        }}
        onBlur={() => runValidationTasks("image_key", image_key)}
        errorMessage={errors.image_key?.errorMessage}
        hasError={errors.image_key?.hasError}
        {...getOverrideProps(overrides, "image_key")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
