import React from "react";
import { useSelector } from "react-redux";

function Section1(props) {
  const form_data = useSelector((state) => state);
  return (
    <div className="form-section1">
      <h1>Section 1</h1>
      <ol>
        <li className="q1">
          <p>Is your business model B2C or B2B or both ?</p>
          <ol type="A">
            <li>
              <input
                type="radio"
                id="B2C"
                name="q1_sec1_answer"
                value="B2C"
                checked={form_data.q1_sec1_answer === "B2C"}
                onChange={props.handleOnChange}
              />
              <label for="B2C">B2C</label>
            </li>
            <li>
              <input
                type="radio"
                id="B2B"
                name="q1_sec1_answer"
                value="B2B"
                checked={form_data.q1_sec1_answer === "B2B"}
                onChange={props.handleOnChange}
              />
              <label for="B2B">B2B</label>
            </li>
            <li>
              <input
                type="radio"
                id="both"
                name="q1_sec1_answer"
                value="both"
                checked={form_data.q1_sec1_answer === "both"}
                onChange={props.handleOnChange}
              />
              <label for="both">both</label>
            </li>
          </ol>
        </li>
        {(form_data.q1_sec1_answer === "B2B" ||
          form_data.q1_sec1_answer === "both") && (
          <li className="q2">
            <p>Do you target all age brackets ?</p>
            <ol type="A">
              <li>
                <input
                  type="radio"
                  id="yes-q2-sec1"
                  name="q2_sec1__answer"
                  value="yes"
                  onChange={props.handleOnChange}
                  checked={form_data.q2_sec1__answer === "yes"}
                />
                <label for="yes-q2-sec1">yes</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="no-q2-sec1"
                  name="q2_sec1__answer"
                  value="no"
                  onChange={props.handleOnChange}
                  checked={form_data.q2_sec1__answer === "no"}
                />
                <label for="no-q2-sec1">no</label>
              </li>
            </ol>
          </li>
        )}
        {(form_data.q1_sec1_answer === "B2C" ||
          form_data.q1_sec1_answer === "both") && (
          <li className="q3">
            <p>Do you target all industries ?</p>
            <ol type="A">
              <li>
                <input
                  type="radio"
                  id="yes-q3-sec1"
                  name="q3_sec1_answer"
                  value="yes"
                  onChange={props.handleOnChange}
                  checked={form_data.q3_sec1_answer === "yes"}
                />
                <label for="yes-q3-sec1">yes</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="no-q3-sec1"
                  name="q3_sec1_answer"
                  value="no"
                  onChange={props.handleOnChange}
                  checked={form_data.q3_sec1_answer === "no"}
                />
                <label for="no-q3-sec1">no</label>
              </li>
            </ol>
          </li>
        )}
      </ol>
    </div>
  );
}

export default Section1;
