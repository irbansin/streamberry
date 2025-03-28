import React, { useState } from "react";
import Input from "../../stories/Input/Input";
import { Button } from "../../stories/Button/Button";
import TextArea from "../../stories/TextArea/TextArea";

function handleSubmit(e: any) {
  e.preventDefault();
  // Make an API call to update the movie data with this.state
  // Redirect to the movie detail page or handle errors
}

export default function MovieForm() {
  const [title, setTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function handleTitle(event: any): void {
    event.preventDefault();
    setTitle(event.target.value);
  }

  function handleOverView(event: any): void {
    event.preventDefault();
    setOverView(event.target.value);
  }

  function handleReleaseDate(event: any): void {
    event.preventDefault();
    setReleaseDate(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <Input
            inputType={"text"}
            placeholderText={"What do you want to watch?"}
            inputValue={title}
            change={handleTitle}
            keyup={handleTitle}
            data-testid="searchValue-input"
          ></Input>
        </div>
        <div>
          <label>Overview:</label>
          {/* <textarea name="overview" value={overView} onChange={handleChange} /> */}
          <TextArea
            placeholderText={"What do you want to watch?"}
            inputValue={overView}
            change={handleOverView}
            keyup={handleOverView}
            data-testid="searchValue-input"
          />
        </div>
        <div>
          <label>Release Date:</label>
          <Input
            inputType={"text"}
            placeholderText={"What do you want to watch?"}
            inputValue={releaseDate}
            change={handleReleaseDate}
            keyup={handleReleaseDate}
            data-testid="searchValue-input"
          ></Input>
        </div>
        {/* <button type="submit">Save</button> */}
        <Button
          buttonType="primary"
          label={"Search"}
          size={"medium"}
          click={() => handleSubmit}
          data-testid="searchButton"
        ></Button>
      </form>
    </div>
  );
}
