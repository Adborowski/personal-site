import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LegoRedirect = () => {
  useEffect(() => {
    window.location.href = "https://adamborowski.com/lego";
  }, []);
  return <h1>Redirecting...</h1>;
};

export default LegoRedirect;
