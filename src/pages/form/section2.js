import React from "react";
import { useSelector } from "react-redux";

function Section2(props) {
  const form_data = useSelector((state) => state);
  return (
    <div className="form-section2">
      <h1>Section 2</h1>
      <ol>
        <li className="q1">
          <p> Did you have an investment ?</p>
          <ol type="A">
            <li>
              <input
                type="radio"
                id="yes-q1-sec2"
                name="q1_sec2_answer"
                value="yes"
                onChange={props.handleOnChange}
                checked={form_data.q1_sec2_answer === "yes"}
              />
              <label for="yes-q1-sec2">yes</label>
            </li>
            <li>
              <input
                type="radio"
                id="no-q1-sec2"
                name="q1_sec2_answer"
                value="no"
                onChange={props.handleOnChange}
                checked={form_data.q1_sec2_answer === "no"}
              />
              <label for="no-q1-sec2">no</label>
            </li>
          </ol>
        </li>
        <li className="q2">
          <p>how much was the investment ?</p>
          <input
            type="number"
            name="q2_sec2__answer"
            value={form_data.q2_sec2__answer}
            onChange={(e) => {
              if (e.target.value >= 0) {
                props.handleOnChange(e);
              }
            }}
            disabled={
              form_data.q1_sec2_answer === "no" || !form_data.q1_sec2_answer
            }
          />
        </li>
      </ol>
    </div>
  );
}

export default Section2;
