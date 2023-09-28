import { toast } from "react-toastify";

const showFeedback = (message: string, type: "error" | "success"): void => {
  toast[type](message, {
    position: "top-center",
    autoClose: 5000,
    theme: "dark",
  });
};

export default showFeedback;
