// SignUpSuccessModal.tsx
import { useState } from "react";
import "./SignUpSuccess.css"; // Import the CSS file

interface SignUpSuccessModalProps {
  onClose: () => void;
}

const SignUpSuccessModal = ({ onClose }: SignUpSuccessModalProps) => {
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Laani Crypto Exchange Waitlist",
        text: "Just joined the Laani Crypto Exchange waitlist.",
        url: "https://your-signup-link.com",
      })
        .then(() => {
          setShared(true);
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Sign up Successful, Welcome to Laani!</h2>
        <p>Thank you for joining the Laani Crypto Exchange waitlist.</p>
        {!shared && (
          <button onClick={handleShare}>Share</button>
        )}
        {shared && (
          <p>Thank you for sharing!</p>
        )}
      </div>
    </div>
  );
};

export default SignUpSuccessModal;

