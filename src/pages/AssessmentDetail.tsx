import { Navigate } from "react-router-dom";

// The platform now hosts a single assessment page. Any legacy
// /readiness-assessment/:slug links redirect to the consolidated page.
const AssessmentDetail = () => <Navigate to="/readiness-assessment" replace />;

export default AssessmentDetail;
