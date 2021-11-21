import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/landingPage"));
const Form = React.lazy(() => import("./pages/form"));
const FinalReport = React.lazy(() => import("./pages/finalReport"));
const PageNotFound = React.lazy(() => import("./pages/404"));

export default function RoutesComponent() {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/business-plan-form" element={<Form/>} />
        <Route exact path="/final-report" element={<FinalReport/>} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
