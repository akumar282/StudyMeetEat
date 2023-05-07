import React from "react";
import "./CSS/CreatePage.css";
import Navbar from "./components/NavBar";
import { ClassesEnum } from "../API";
import { useFormik } from "formik";
import {
  Autocomplete,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker, MobileTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import DownloadIcon from "@mui/icons-material/Download";
import { uploadImage } from '../backend/storage/s3'
import { createMeet } from '../backend/mutations/postMutations'
import { v4 as uuidv4 } from 'uuid';
import { time } from "console";

export default function CreatePage() {
  const [selectedClass, setSelectedClass] = React.useState([]);
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [timeOne, setTimeOne] = React.useState<Dayjs | null>(dayjs());
  const [timeTwo, setTimeTwo] = React.useState<Dayjs | null>(dayjs());
  const [isSelected, setIsSelected] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileObject, setFileObject] = React.useState(null);
  const [Image, setImage] = React.useState("");
  const [selectedDate, handleDateChange] = React.useState<Dayjs | null>(
    dayjs()
  );

  async function createMeetDyn(props: {
    title: string,
    description: string,
    location: string,
    class: ClassesEnum[],
    startTime: string,
    endTime: string,
  }): Promise<void> {
    const uuidGen = uuidv4();
    const imageLink = await uploadImage(selectedFile!)
    const result = await createMeet({
      input: {
        id: uuidGen,
        creator_id: localStorage.getItem('uuid')!,
        meet_creator: localStorage.getItem('username')!,
        image_key: imageLink,
        meet_name: props.title,
        description: props.description,
        location: props.location,
        classes: props.class,
        start_time: props.startTime,
        end_time: props.endTime,
      }
    })
    console.log(result)
  }

  function handleClass(event: any, value: any | null) {
    setSelectedClass(value.map((item: any) => item));
    formik.setFieldValue("language", value);
    console.log(value);
  }
  function handleClick(event) {
    const fileInput = document.getElementById("file");
    fileInput?.click();
  }
  function handleChange(event) {
    setFileObject({ ...event.target.files[0] });
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      class: [],
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.title) {
        errors.title = "Required";
      } else if (values.title.length > 15) {
        errors.title = "Must be 15 characters or less";
      }
      if (!values.description) {
        errors.description = "Required";
      } else if (values.description.length > 100) {
        errors.description = "Must be 100 characters or less";
      }
      if (!values.location) {
        errors.location = "Required";
      }
      if (!values.class) {
        errors.class = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      createMeetDyn(values)
    },
  });
  console.log(date?.format("YYYY-MM-DD"));
  console.log(timeOne?.format("HH:mm:ss"));
  console.log(timeTwo?.format("HH:mm:ss"));
  return (
    <main className="CreateContainer">
      <Navbar />
      <div className="CreateContent">
        <div className="CreateForm">
          <div className="CreateFormLeft">
            <div className="CFInputImgContainer">
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#6259b9",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#716ab4",
                  },
                }}
                onClick={handleClick}
              >
                <DownloadIcon fontSize="large" />
              </IconButton>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none", borderWidth: "0px" }}
              />
              <img className="imagePrev" id="Image" src={Image} alt={""} />
            </div>
            <div className="CFDescription">
              <div className="CFDescriptionInput">
                <Typography
                  sx={{
                    mt: "1rem",
                    color: "#111111",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Description
                </Typography>
                <TextField
                  id="description"
                  multiline
                  fullWidth
                  rows={3}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    (formik.touched.description && formik.errors.description) ||
                    " "
                  }
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          <div className="CFMeetingInfo">
            <div className="CFMeetingInfoTitle">
              <h2>Meeting Name</h2>
              <TextField
                id="title"
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={
                  (formik.touched.title && formik.errors.title) || " "
                }
                variant="outlined"
              />
            </div>
            <div className="CFMeetingInfoDate">
              <Typography
                sx={{
                  color: "#111111",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Date
              </Typography>

              <DatePicker
                disablePast
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </div>
            <div className="CFMeetingInfoTime">
              
              <div className="CFMeetingInfoTimeInput">
                <Typography
                sx={{
                  color: "#111111",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                From
              </Typography>
                <MobileTimePicker
                disablePast
                  value={timeOne}
                  onChange={(newValue) => setTimeOne(newValue)}
                />
                </div>
                <div className="CFMeetingInfoTimeInput">
                <Typography
                sx={{
                  color: "#111111",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                To
              </Typography>
                <MobileTimePicker
                  value={timeTwo}
                  onChange={(newValue) => setTimeTwo(newValue)}
                />
              </div>
            </div>
            <div className="CFMeetingInfoLocation">
              <Typography
                sx={{
                  color: "#111111",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Location
              </Typography>
              <TextField
                id="location"
                fullWidth
                value={formik.values.location}
                onChange={formik.handleChange}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                helperText={
                  (formik.touched.location && formik.errors.location) || " "
                }
                variant="outlined"
              />
            </div>
            <div className="CFMeetingInfoClass">
              <Typography
                sx={{
                  color: "#111111",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Classes
              </Typography>

              <Autocomplete
                sx={{
                  width: "90%",
                }}
                multiple
                limitTags={2}
                id="language"
                options={Object.values(ClassesEnum)}
                getOptionLabel={(option) => option}
                defaultValue={[ClassesEnum[0]]}
                filterSelectedOptions
                value={selectedClass}
                onChange={handleClass}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={formik.values.class}
                    error={formik.touched.class && Boolean(formik.errors.class)}
                    helperText={
                      (formik.touched.class && formik.errors.class) || " "
                    }
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="CFCreateButton">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#bf9b30",
            width: "85%",
            color: "#FFFFFF",
            fontSize: "1rem",
            height: "3rem",
            "&:hover": {
              backgroundColor: "#cea835",
            },
          }}
          onClick={() => formik.handleSubmit()}
        >
          Create
        </Button>
      </div>
    </main>
  );
}
