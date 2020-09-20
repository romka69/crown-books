import React from "react"

import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import Header from "./Header"
import Field from "./Field"
import SelectAuthor from "./SelectAuthor"
import Actions from "./Actions"

import { createBook } from "../../../../data/createData"
import { bookPath } from "../../../shared/helpers/routes"

const AddBookForm = () => {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  const onSubmit = (fields) => {
    console.log(fields)
    return createBook({
      ...fields,
      Pages: parseFloat(fields.Pages),
      Feeds: parseFloat(fields.Feeds),
      MinPrice: parseFloat(fields.MinPrice),
      DesiredPrice: parseFloat(fields.DesiredPrice),
      CurrentSum: parseFloat(fields.CurrentSum),
      ExpectedPrice: parseFloat(fields.ExpectedPrice),
    })
      .then((res) => {
        const bookId = res.records[0].id
        const redirectURI = bookPath(bookId)

        history.push(redirectURI)
        console.log(res)
      })
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
          placeholder="Title"
          name="Title"
          wrapperClass="sm:w-full"
          register={register}
        />
        <Field
          className="resize-y"
          placeholder="Annotation"
          name="Annotation"
          wrapperClass="sm:w-full"
          type="textarea"
          register={register}
        />
        <Wrapper>
          <Field
            placeholder="Pages"
            name="Pages"
            register={register}
            type="number"
          />
          <Field
            placeholder="Language"
            name="Language"
            register={register}
            defaultValue="English"
          />
        </Wrapper>
        <Wrapper>
          <Field
            placeholder="Book progress"
            name="ProgressPercent"
            register={register}
          />
          <Field
            placeholder="Feeds"
            name="Feeds"
            register={register}
            type="number"
          />
        </Wrapper>
        <Field
          placeholder="Cover"
          name="Cover[0].url"
          wrapperClass="sm:w-full"
          register={register}
        />
        <Wrapper>
          <Field
            placeholder="Minimal price"
            name="MinPrice"
            type="number"
            register={register}
          />
          <Field
            placeholder="Desired price"
            name="DesiredPrice"
            type="number"
            register={register}
          />
        </Wrapper>
        <Wrapper>
          <Field
            placeholder="Current sum"
            name="CurrentSum"
            type="number"
            register={register}
          />
          <Field
            placeholder="Expected price"
            name="ExpectedPrice"
            type="number"
            register={register}
          />
        </Wrapper>
        <SelectAuthor
          name="Authors[0]"
          register={register}
        />
        <Actions />
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