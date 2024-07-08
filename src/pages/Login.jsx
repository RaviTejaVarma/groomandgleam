import React from "react";
import supabase from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // supabase.auth.onAuthStateChange(async event => {
  //   if (event !== "SIGNED_OUT") {
  //     navigate("/");
  //   } else {
  //     navigate("/");
  //   }
  // });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <Auth
          supabaseClient={supabase}
          appearance={{
            style: {
              button: {
                borderRadius: "0.375rem",
                height: "3rem", // Increased height
              },
              input: {
                borderColor: "#e5e7eb",
                borderRadius: "0.375rem",
                height: "3rem", // Increased height
                padding: "0.75rem", // Add padding for better appearance
                placeholder: { color: "#9ca3af" }, // Tailwind color: gray-400
              },
            },
          }}
          providers={["google", "facebook"]}
        />
      </div>
    </div>
  );
};

export default Login;
