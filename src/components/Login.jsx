import React, { useState, use } from "react";
import { UserContext } from "../contaxt/userContext";
import { useNavigate } from "react-router";

export default function Login() {
   const { user, login, userdata, gest, setgest, toast, setToast } =
      use(UserContext);
   const navigate = useNavigate();

   const [email, setEmail] = useState("admin");
   const [pass, setPass] = useState("admin");

   // SAFE toast (no object error)
   const showToast = (text, type = "info", duration = 2000) => {
      const safeText = typeof text === "object" ? JSON.stringify(text) : text;

      setToast({ text: safeText, type, visible: true });

      setTimeout(() => {
         setToast((t) => ({ ...t, visible: false }));
      }, duration);
   };

   // Normal login
   const handleLogin = () => {
      const res = login(email, pass);

      if (res && res.success) {
         // ALWAYS STRING (NO OBJECT)
         const name =
            res.user?.name || res.user?.userName || userdata?.name || email;

         showToast(`Welcome ${name}`, "success");
         navigate("/");
      } else {
         showToast(res?.message || "Login failed", "error");
      }
   };

   // Guest login
   const handleGuestLogin = () => {
      setgest(true);
      showToast("Logged in as guest", "info");
      navigate("/");
   };

   // Skip
   const handleSkip = () => {
      showToast("You skipped login", "warning");
      navigate("/");
   };

   return (
      <section
         className="relative w-full h-screen bg-[url('https://i.ibb.co.com/RGFnFd0D/ai-generated-beautiful-background-for-jewelry-advertising-free-photo.jpg')] 
      bg-cover bg-no-repeat flex items-center justify-center"
      >
         {/* Blur Overlay */}
         <div className="absolute inset-0 backdrop-blur-lg bg-black/40"></div>

         {/* Skip Button */}
         <button
            onClick={handleSkip}
            className="absolute top-20 right-56 text-white bg-yellow-400 
        px-3 py-1 rounded-md text-xl font-medium hover:text-gray-300 z-20"
         >
            Skip
         </button>

         {/* Login Card */}
         <div
            className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 
      shadow-xl rounded-2xl p-8 w-[90%] max-w-sm text-center"
         >
            <h1 className="text-3xl font-semibold text-white mb-6">
               Welcome Back
            </h1>

            {/* Input Fields */}
            <div className="space-y-4 mb-6">
               <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white 
            placeholder-gray-200 border border-white/30 focus:outline-none 
            focus:ring-2 focus:ring-white"
               />
               <input
                  type="password"
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white 
            placeholder-gray-200 border border-white/30 focus:outline-none 
            focus:ring-2 focus:ring-white"
               />
            </div>

            {/* Login Button */}
            <button
               onClick={handleLogin}
               className="w-full py-3 rounded-lg bg-white text-black font-semibold 
          text-lg hover:bg-gray-200 transition"
            >
               Login
            </button>

            {/* Guest Button */}
            <button
               onClick={handleGuestLogin}
               className="mt-4 w-full py-3 rounded-lg border border-white text-white 
          font-medium hover:bg-white/20 transition"
            >
               Login as Guest
            </button>
         </div>

         {/* Center Toast */}
         {toast?.visible && (
            <div
               className={`
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            z-50 min-w-[260px] rounded-lg px-5 py-4 shadow-xl text-center 
            animate-[fadeInUp_0.4s_ease-out]
            ${
               toast.type === "success"
                  ? "bg-green-600 text-white"
                  : toast.type === "error"
                  ? "bg-red-600 text-white"
                  : toast.type === "warning"
                  ? "bg-yellow-500 text-black"
                  : "bg-blue-600 text-white"
            }
          `}
            >
               <div className="font-semibold text-lg">{toast.text}</div>
            </div>
         )}
      </section>
   );
}
