import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header"

const ErrorPage = () => {
  return (
    <div>
<Header />
    <Alert severity="error" className="errors">
      <AlertTitle>
        <strong>404</strong>
      </AlertTitle>
      <p className="error-message">      Oops, looks like you've searched for a page which does not exist
</p>
      <Link to="/">
        <button className="back-button-error">Go Back</button>
      </Link>
    </Alert>
    </div>
  );
};

export default ErrorPage