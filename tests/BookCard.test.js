const { TestScheduler } = require("jest")

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import BookCard from "../src/components/BookCard"

test("renders book in a card", () => {
  const book = {
    "Title": "The Adventures of Tom Sawyer",
    "Annotation": "An 1876 novel about a young boy growing up along the Mississippi River. It is set in the 1840s in the fictional town of St. Petersburg, inspired by Hannibal, Missouri, where Twain lived as a boy. In the novel Tom Sawyer has several adventures, often with his friend, Huck. One such adventure, Tom's whitewashing of a fence, has been adapted into paintings and referenced in other pieces of popular culture. Originally a commercial failure the book ended up being the best selling of any of Twain's works during his lifetime.",
    "Pages": "242",
    "Language": "English",
    "ProgressPercent": "99%",
    "Cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tom_Sawyer_1876_frontispiece.jpg/800px-Tom_Sawyer_1876_frontispiece.jpg",
    "Author": {
      "Name": "Mark Twain",
      "Email": "mark-twain@yahoo.com",
      "AvatarURL": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg",
      "Info": "Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910),[1] known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the 'greatest humorist [the United States]has produced', and William Faulkner called him 'the father of American literature'.His novels include The Adventures of Tom Sawyer (1876) and its sequel, the Adventures of Huckleberry Finn (1884), the latter often called 'The Great American Novel'."
    },
    "MinPrice": 15,
    "DesiredPrice": 22,
    "CurrentSum": 3850,
    "ExpectedPrice": 4500,
  }

  const { getByText } = render(<BookCard book={book} />)

  expect(getByText("The Adventures of Tom Sawyer")).toBeInTheDocument()
  expect(getByText("$3850")).toBeInTheDocument()
});

test("render empty book in a card", () => {
  const { getByText } = render(<BookCard />)

  expect(getByText("Empty book")).toBeInTheDocument()
});