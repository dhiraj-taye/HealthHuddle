import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const VerifyPayment = () => {
  const { navigate, token, backendUrl } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success
  const [loading, setLoading] = useState(true); // State to show loading message
  const [showButton, setShowButton] = useState(false); // State to show the button after timeout

  // Extracting all parameters from the URL
  const success = searchParams.get("success");
  const userId = searchParams.get("userId");
  const docId = searchParams.get("docId");
  const slotDate = searchParams.get("slotDate");
  const slotTime = searchParams.get("slotTime");

  // Function to verify payment
  const verifyPayment = async () => {
    try {
      if (!token) {
        return toast.error("Not authorized. Please log in.");
      }

      // Sending the POST request to verify the payment
      const response = await axios.post(
        `${backendUrl}/api/user/verify`,
        { success, userId, docId, slotDate, slotTime },
        { headers: { token } }
      );

      if (response.data.success) {
        // Handle success
        setPaymentSuccess(true); // Show success message
        setLoading(false); // Stop loading

        toast.success("Payment verified successfully!");

        // Show the button to go to appointments after 1 minute
        setTimeout(() => {
          setShowButton(true);
        }, 600); // 1 minute = 60000 ms

      } else {
        // Handle failure
        toast.error("Payment verification failed!");
        setLoading(false); // Stop loading
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      toast.error("Something went wrong during payment verification.");
      setLoading(false); // Stop loading
    }
  };

  // Trigger payment verification on component mount
  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {loading ? (
        <p>Verifying payment...</p>
      ) : paymentSuccess ? (
        <>
          <h3 style={{ color: "green" }}>Payment successful!</h3>
          
        </>
      ) : (
        <h3 style={{ color: "red" }}>Payment verification failed.</h3>
      )}

      {/* Show the button after 1 minute */}
      {showButton && (
        <button 
          style={{
            padding: "10px 20px", 
            marginTop:"10px",
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer"
          }}
          onClick={() => navigate("/my-appointments")} // Navigating to My Appointments
        >
          Go to My Appointments
        </button>
      )}
    </div>
  );
};

export default VerifyPayment;
