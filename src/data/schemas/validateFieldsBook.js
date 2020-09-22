import * as yup from "yup"

const positiveNum = "Must be a positive number"
const supportedFormats = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
]

export const schema = yup.object().shape({
  Title: yup.string().required(),
  Annotation: yup.string().min(20).max(500).required(),
  Pages: yup.number().positive().required().typeError(positiveNum),
  Language: yup.string().required(),
  ProgressPercent: yup.number().min(0).max(100).required().typeError(positiveNum),
  Feeds: yup.number().positive().required().typeError(positiveNum),
  Cover: yup.mixed()
    .test(
      "required",
      "A File is required",
      value => value && value.length > 0
    )
    .test(
      "fileFormat",
      "Unsupported format",
      value => value && value[0] && supportedFormats.includes(value[0].type)
    )
    .test(
      "fileSize",
      "File to large",
      value => value && value[0] && value[0].size <= 1000000
    ),
  Authors: yup.string().required(),
  MinPrice: yup.number().positive().required().typeError(positiveNum),
  DesiredPrice: yup.number().positive().required().typeError(positiveNum),
  CurrentSum: yup.number().positive().required().typeError(positiveNum),
  ExpectedPrice: yup.number().positive().required().typeError(positiveNum)
})