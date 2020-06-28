import React from "react"

const NewQuestionForm = () => (
  <div>
      <h2>create new fquestion</h2>
      <hr />
      <h4>would you rather...</h4>
      <form>
        <input placeholder="first option"></input>
        <p>or</p>
        <input placeholder="second option"></input>
        <input type="submit">submit</input>
      </form>
  </div>
)


export default NewQuestionForm;
