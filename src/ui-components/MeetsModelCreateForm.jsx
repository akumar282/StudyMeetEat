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
import { MeetsModel } from "../models";
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
export default function MeetsModelCreateForm(props) {
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
    creator_id: "",
    meet_creator: "",
    meet_name: "",
    location: "",
    start_time: "",
    end_time: "",
    classes: [],
    attendants: [],
    image_key: "",
    description: "",
  };
  const [creator_id, setCreator_id] = React.useState(initialValues.creator_id);
  const [meet_creator, setMeet_creator] = React.useState(
    initialValues.meet_creator
  );
  const [meet_name, setMeet_name] = React.useState(initialValues.meet_name);
  const [location, setLocation] = React.useState(initialValues.location);
  const [start_time, setStart_time] = React.useState(initialValues.start_time);
  const [end_time, setEnd_time] = React.useState(initialValues.end_time);
  const [classes, setClasses] = React.useState(initialValues.classes);
  const [attendants, setAttendants] = React.useState(initialValues.attendants);
  const [image_key, setImage_key] = React.useState(initialValues.image_key);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreator_id(initialValues.creator_id);
    setMeet_creator(initialValues.meet_creator);
    setMeet_name(initialValues.meet_name);
    setLocation(initialValues.location);
    setStart_time(initialValues.start_time);
    setEnd_time(initialValues.end_time);
    setClasses(initialValues.classes);
    setCurrentClassesValue("");
    setAttendants(initialValues.attendants);
    setCurrentAttendantsValue("");
    setImage_key(initialValues.image_key);
    setDescription(initialValues.description);
    setErrors({});
  };
  const [currentClassesValue, setCurrentClassesValue] = React.useState("");
  const classesRef = React.createRef();
  const [currentAttendantsValue, setCurrentAttendantsValue] =
    React.useState("");
  const attendantsRef = React.createRef();
  const getDisplayValue = {
    classes: (r) => {
      const enumDisplayValueMap = {
        CSS360: "Css360",
        CSS342: "Css342",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    creator_id: [{ type: "Required" }],
    meet_creator: [{ type: "Required" }],
    meet_name: [{ type: "Required" }],
    location: [{ type: "Required" }],
    start_time: [{ type: "Required" }],
    end_time: [{ type: "Required" }],
    classes: [],
    attendants: [],
    image_key: [],
    description: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          creator_id,
          meet_creator,
          meet_name,
          location,
          start_time,
          end_time,
          classes,
          attendants,
          image_key,
          description,
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
          await DataStore.save(new MeetsModel(modelFields));
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
      {...getOverrideProps(overrides, "MeetsModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Creator id"
        isRequired={true}
        isReadOnly={false}
        value={creator_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id: value,
              meet_creator,
              meet_name,
              location,
              start_time,
              end_time,
              classes,
              attendants,
              image_key,
              description,
            };
            const result = onChange(modelFields);
            value = result?.creator_id ?? value;
          }
          if (errors.creator_id?.hasError) {
            runValidationTasks("creator_id", value);
          }
          setCreator_id(value);
        }}
        onBlur={() => runValidationTasks("creator_id", creator_id)}
        errorMessage={errors.creator_id?.errorMessage}
        hasError={errors.creator_id?.hasError}
        {...getOverrideProps(overrides, "creator_id")}
      ></TextField>
      <TextField
        label="Meet creator"
        isRequired={true}
        isReadOnly={false}
        value={meet_creator}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              meet_creator: value,
              meet_name,
              location,
              start_time,
              end_time,
              classes,
              attendants,
              image_key,
              description,
            };
            const result = onChange(modelFields);
            value = result?.meet_creator ?? value;
          }
          if (errors.meet_creator?.hasError) {
            runValidationTasks("meet_creator", value);
          }
          setMeet_creator(value);
        }}
        onBlur={() => runValidationTasks("meet_creator", meet_creator)}
        errorMessage={errors.meet_creator?.errorMessage}
        hasError={errors.meet_creator?.hasError}
        {...getOverrideProps(overrides, "meet_creator")}
      ></TextField>
      <TextField
        label="Meet name"
        isRequired={true}
        isReadOnly={false}
        value={meet_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              meet_creator,
              meet_name: value,
              location,
              start_time,
              end_time,
              classes,
              attendants,
              image_key,
              description,
            };
            const result = onChange(modelFields);
            value = result?.meet_name ?? value;
          }
          if (errors.meet_name?.hasError) {
            runValidationTasks("meet_name", value);
          }
          setMeet_name(value);
        }}
        onBlur={() => runValidationTasks("meet_name", meet_name)}
        errorMessage={errors.meet_name?.errorMessage}
        hasError={errors.meet_name?.hasError}
        {...getOverrideProps(overrides, "meet_name")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              meet_creator,
              meet_name,
              location: value,
              start_time,
              end_time,
              classes,
              attendants,
              image_key,
              description,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Start time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={start_time && convertToLocal(new Date(start_time))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              creator_id,
              meet_creator,
              meet_name,
              location,
              start_time: value,
              end_time,
              classes,
              attendants,
              image_key,
              description,
            };
            const result = onChange(modelFields);
            value = result?.start_time ?? value;
          }
          if (errors.start_time?.hasError) {
            runValidationTasks("start_time", value);
          }
          setStart_time(value);
        }}
        onBlur={() => runValidationTasks("start_time", start_time)}
        errorMessage={errors.start_time?.errorMessage}
        hasError={errors.start_time?.hasError}
        {...getOverrideProps(overrides, "start_time")}
      ></TextField>
      <TextField
        label="End time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={end_time && convertToLocal(new Date(end_time))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              creator_id,
              meet_creator,
              meet_name,
              location,
              start_time,
              end_time: value,
              classes,
              attendants,
              image_key,
              description,
            };
            const result = onChange(modelFields);
            value = result?.end_time ?? value;
          }
          if (errors.end_time?.hasError) {
            runValidationTasks("end_time", value);
          }
          setEnd_time(value);
        }}
        onBlur={() => runValidationTasks("end_time", end_time)}
        errorMessage={errors.end_time?.errorMessage}
        hasError={errors.end_time?.hasError}
        {...getOverrideProps(overrides, "end_time")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              creator_id,
              meet_creator,
              meet_name,
              location,
              start_time,
              end_time,
              classes: values,
              attendants,
              image_key,
              description,
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
              creator_id,
              meet_creator,
              meet_name,
              location,
              start_time,
              end_time,
              classes,
              attendants: values,
              image_key,
              description,
            };
            const result = onChange(modelFields);
            values = result?.attendants ?? values;
          }
          setAttendants(values);
          setCurrentAttendantsValue("");
        }}
        currentFieldValue={currentAttendantsValue}
        label={"Attendants"}
        items={attendants}
        hasError={errors?.attendants?.hasError}
        errorMessage={errors?.attendants?.errorMessage}
        setFieldValue={setCurrentAttendantsValue}
        inputFieldRef={attendantsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Attendants"
          isRequired={false}
          isReadOnly={false}
          value={currentAttendantsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.attendants?.hasError) {
              runValidationTasks("attendants", value);
            }
            setCurrentAttendantsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("attendants", currentAttendantsValue)
          }
          errorMessage={errors.attendants?.errorMessage}
          hasError={errors.attendants?.hasError}
          ref={attendantsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "attendants")}
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
              creator_id,
              meet_creator,
              meet_name,
              location,
              start_time,
              end_time,
              classes,
              attendants,
              image_key: value,
              description,
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
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              meet_creator,
              meet_name,
              location,
              start_time,
              end_time,
              classes,
              attendants,
              image_key,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
