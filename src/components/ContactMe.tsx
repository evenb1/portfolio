"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { sendEmail } from "../app/actions/send-email";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const result = await sendEmail(formData);
    setIsSubmitting(false);

    if (result.success) {
      toast.success("Message sent successfully!");
      reset();
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8">
      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
          Contact Me
        </h2>

        {/* Contact Details and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-6 h-6" />
              <a
                href="mailto:even.berhane2018@gmail.com"
                className="hover:underline text-white"
              >
                even.berhane2018@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-6 h-6" />
              <a href="tel:+254115933236" className="hover:underline text-white">
                +254 115 933 236
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Toast Notifications */}
      <Toaster position="bottom-right" />
    </section>
  );
}
