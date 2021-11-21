import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeAnswers } from "../../store/actions";

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      storeAnswers({
        q1_sec1_answer: "",
        q2_sec1__answer: "",
        q3_sec1_answer: "",

        q1_sec2_answer: "",
        q2_sec2__answer: 0
      })
    );
  }, []);

  return (
    <div className="landing-page-container">
      <div>
        <h1>Welcome to our website</h1>
        <Button
          variant="primary"
          onClick={() => navigate("/business-plan-form")}
        >
          generate business plan
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
