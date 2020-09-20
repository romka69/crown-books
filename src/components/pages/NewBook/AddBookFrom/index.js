import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers"

import Header from "./Header"
import Field from "./Field"
import SelectAuthor from "./SelectAuthor"
import Actions from "./Actions"

import { createBook } from "../../../../data/createData"
import { bookPath } from "../../../shared/helpers/routes"
import { schema } from "../../../../data/schemas/validateFieldsBook"
import { uploadFile } from "../../../../api/filestack"

const AddBookForm = () => {
  const { errors, register, handleSubmit, formState: { isSubmitting } } = useForm({ resolver: yupResolver(schema) })
  const history = useHistory()

  const onSubmit = async ({ Cover, ...fields }) => {
    const formData = new FormData()
    formData.append("fileUpload", Cover[0])
    const upploadResult = await uploadFile(formData)

    const res = await createBook({
      ...fields,
      Cover: [
        { url: upploadResult.url }
      ],
      Authors: [
        fields.Authors
      ],
      Pages: parseFloat(fields.Pages),
      Feeds: parseFloat(fields.Feeds),
      MinPrice: parseFloat(fields.MinPrice),
      DesiredPrice: parseFloat(fields.DesiredPrice),
      CurrentSum: parseFloat(fields.CurrentSum),
      ExpectedPrice: parseFloat(fields.ExpectedPrice)
    })

    const productid = res.records[0].id
    const redirectURI = bookPath(productid)

    history.push(redirectURI)
  }

  return (
    <>
      <Header>
        You can add new book to Crown-Books. Just input info about book in form.
      </Header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl rounded border py-5 border-solid"
      >
        <Field
          errors={errors}
          placeholder="Title"
          name="Title"
          wrapperClass="sm:w-full"
          register={register}
        />
        <Field
          errors={errors}
          className="resize-y"
          placeholder="Annotation"
          name="Annotation"
          wrapperClass="sm:w-full"
          type="textarea"
          register={register}
        />
        <Wrapper>
          <Field
            errors={errors}
            placeholder="Pages"
            name="Pages"
            register={register}
            type="number"
          />
          <Field
            errors={errors}
            placeholder="Language"
            name="Language"
            register={register}
          />
        </Wrapper>
        <Wrapper>
          <Field
            errors={errors}
            placeholder="Book progress"
            name="ProgressPercent"
            register={register}
          />
          <Field
            errors={errors}
            placeholder="Feeds"
            name="Feeds"
            register={register}
            type="number"
          />
        </Wrapper>
        <Field
          errors={errors}
          placeholder="Cover"
          name="Cover"
          type="file"
          wrapperClass="sm:w-full"
          register={register}
        />
        <Wrapper>
          <Field
            errors={errors}
            placeholder="Minimal price"
            name="MinPrice"
            type="number"
            register={register}
          />
          <Field
            errors={errors}
            placeholder="Desired price"
            name="DesiredPrice"
            type="number"
            register={register}
          />
        </Wrapper>
        <Wrapper>
          <Field
            errors={errors}
            placeholder="Current sum"
            name="CurrentSum"
            type="number"
            register={register}
          />
          <Field
            errors={errors}
            placeholder="Expected price"
            name="ExpectedPrice"
            type="number"
            register={register}
          />
        </Wrapper>
        <SelectAuthor
          errors={errors}
          name="Authors"
          register={register}
        />
        <Actions
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Actions>
      </form>
    </>
  )
}

export default AddBookForm

const Wrapper = ({ children }) => (
  <div className="flex flex-wrap">
    {children}
  </div>
)