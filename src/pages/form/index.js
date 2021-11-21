import React, { useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Section1 from "./section1";
import Section2 from "./section2";
import { storeAnswers } from "../../store/actions";
import axios from "axios";
import { useNavigate } from "react-router";

function Form() {
  const [current_section, setCurrentSection] = useState(1);
  const [send_data_error, setSendDataError] = useState(false);
  const [sending_data, setSendingData] = useState(false);
  const form_data = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      storeAnswers({
        q1_sec1_answer: "",
        q2_sec1__answer: "",
        q3_sec1_answer: "",

        q1_sec2_answer: "",
        q2_sec2__answer: 0,
      })
    );
  }, []);

  const handleOnChange = (e) => {
    dispatch(storeAnswers({ [e.target.name]: e.target.value }));
  };

  const submitData = async () => {
    setSendingData(true);
    try{
      let res = await axios.post(
        "https://stoplight.io/mocks/business-plan/business-plan/28824466/add-business-plan",
        form_data
      );
      setSendingData(false);
      if (res.status === 200) {
        dispatch(
          storeAnswers({
            q1_sec1_answer: "",
            q2_sec1__answer: "",
            q3_sec1_answer: "",
    
            q1_sec2_answer: "",
            q2_sec2__answer: 0,
          })
        );
        navigate("/final-report");
        return;
      }
      setSendDataError(true);
    }
    catch(e){
      setSendingData(false);
      setSendDataError(true);
      console.log(e);
    }
  };
  return (
    <div className="form-container">
      <div>
        {send_data_error&&<Alert variant="danger">
          Something went wrong!
        </Alert>}
        {current_section === 1 ? (
          <Section1 handleOnChange={handleOnChange} />
        ) : (
          <Section2 handleOnChange={handleOnChange} />
        )}
        <div
          className={
            current_section === 1 ? "next-container" : "btns-container"
          }
        >
          {current_section === 2 && (
            <Button onClick={() => setCurrentSection(1)}>Previous</Button>
          )}
          {current_section === 1 ? (
            <Button disabled={!((form_data.q1_sec1_answer&&form_data.q1_sec1_answer!=="both"&&(form_data.q2_sec1__answer||form_data.q3_sec1_answer))||(form_data.q1_sec1_answer&&form_data.q2_sec1__answer&&form_data.q3_sec1_answer))} onClick={() => setCurrentSection(2)}>Next</Button>
          ) : (
            <Button disabled={!((form_data.q1_sec2_answer==="yes"&&form_data.q2_sec2__answer)||(form_data.q1_sec2_answer==="no"))} onClick={submitData}>{!sending_data?"Submit":<Spinner animation="border" role="status"/>}</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
