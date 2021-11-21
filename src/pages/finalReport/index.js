import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function FinalReport() {
  const navigate = useNavigate();
  return (
    <div className="final-report-container">
      <div>
        <h2>Your plan has been successfully added</h2>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go to home
        </Button>
      </div>
    </div>
  );
}

export default FinalReport;
