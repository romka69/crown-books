import React from "react"

import Header from "./Header"
import Field from "./Field"
import SelectAuthor from "./SelectAuthor"
import Actions from "./Actions"

const onSubmit = (e) => {
  e.preventDefault()
  console.log("Submit")
}

const AddBookForm = () => {
  return (
    <>
      <Header>
        You can add new book to Crown-Books. Just input info about book in form.
      </Header>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-xl rounded border py-5 border-solid"
      >
        <Field
          placeholder="Title"
          name="Title"
          wrapperClass="sm:w-full"
        />
        <Field
          className="resize-y"
          placeholder="Annotation"
          name="Annotation"
          wrapperClass="sm:w-full"
          type="textarea"
        />
        <Wrapper>
          <Field
            placeholder="Pages"
            name="Pages"
          />
          <Field
            placeholder="Language"
            name="Language"
          />
        </Wrapper>
        <Wrapper>
          <Field
            placeholder="Book progress"
            name="ProgressPercent"
          />
          <Field
            placeholder="Feeds"
            name="Feeds"
          />
        </Wrapper>
        <Field
          placeholder="Cover"
          name="Cover"
          wrapperClass="sm:w-full"
        />
        <Wrapper>
          <Field
            placeholder="Minimal price"
            name="MinPrice"
            type="number"
          />
          <Field
            placeholder="Desired price"
            name="DesiredPrice"
            type="number"
          />
        </Wrapper>
        <Wrapper>
          <Field
            placeholder="Current sum"
            name="CurrentSum"
            type="number"
          />
          <Field
            placeholder="Expected price"
            name="ExpectedPrice"
            type="number"
          />
        </Wrapper>
        <SelectAuthor />
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