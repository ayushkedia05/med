import React, { useState } from "react";

import Card from "./components/UI/Card";
import "./form.css";
import LoadingIndicator from './components/UI/LoadingIndicator'
const IngredientForm = React.memo((props) => {


  const [enteredtitle, setenteredtitle] = useState("");
 

  const submitHandler = (event) => {
    event.preventDefault();
    props.onaddingedrient({title:enteredtitle})
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredtitle}
              onChange={(event) => {
                const newtitle = event.target.value;
                setenteredtitle(newtitle);
              }}
            />
          </div>
          <div className="form-control">
           
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">find video</button>
            {props.loading && <LoadingIndicator></LoadingIndicator>}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
