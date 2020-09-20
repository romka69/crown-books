import * as yup from "yup"

const reuiredField = "Required field"
const positiveNum = "Must be a positive number"
const supportedFormats = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
]

export const schema = yup.object().shape({
  Title: yup.string().required(reuiredField),
  Annotation: yup.string().min(20).max(500).required(),
  Pages: yup.number().positive().required().typeError(positiveNum),
  Language: yup.string().required(reuiredField),
  ProgressPercent: yup.number().min(0).max(100).required().typeError(positiveNum),
  Feeds: yup.number().positive().required().typeError(positiveNum),
  // Cover: yup.mixed()
  //   .required("A file is required")
  //   .test(
  //     "fileSize",
  //     "File to large",
  //     value => value && value[0].size <= 1000000
  //   )
  //   .test(
  //     "fileFormat",
  //     "Unsupported format",
  //     value => value && supportedFormats.includes(value[0].type)
  //   ),
  Authors: yup.string().required(reuiredField),
  MinPrice: yup.number().positive().required().typeError(positiveNum),
  DesiredPrice: yup.number().positive().required().typeError(positiveNum),
  CurrentSum: yup.number().positive().required().typeError(positiveNum),
  ExpectedPrice: yup.number().positive().required().typeError(positiveNum)
})