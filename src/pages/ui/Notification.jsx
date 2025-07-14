import React, { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Notification({
  type = "success",
  title,
  message,
  onClose,
  duration = 4000,
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed top-5 right-5 z-50 max-w-sm w-full shadow-lg rounded-lg p-4 flex items-start space-x-4 border-l-4 transition-all duration-300 ${
          isSuccess
            ? "bg-green-950 border-green-500 text-green-100"
            : "bg-red-950 border-red-500 text-red-100"
        }`}
      >
        <div className="pt-1">
          {isSuccess ? (
            <CheckCircle className="text-green-400" />
          ) : (
            <XCircle className="text-red-400" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-md mb-1">{title}</h4>
          <p className="text-sm opacity-80 leading-tight">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-sm px-2 text-gray-400 hover:text-white focus:outline-none"
        >
          ✖
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
