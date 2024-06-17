import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton({ history }) {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(history);
      }}
    >
      &larr; Back
    </Button>
  );
}
