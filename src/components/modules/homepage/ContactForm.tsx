"use client";

import { FieldValues, SubmitHandler } from "react-hook-form";
import MotionElement from "../../motionDiv/MotionElement";
import PForm from "../../form/PForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMeEmailSchema } from "@/src/schema/contact-email.schema";
import PInput from "../../form/PInput";
import PTextarea from "../../form/PTextArea";
import { BiMailSend } from "react-icons/bi";
import { toast } from "sonner";
import { useState } from "react";
import PButton from "../../form/PButton";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  const onSubmit: SubmitHandler<FieldValues> = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Email send successfully");
    setLoading(false);
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 border py-8 px-8 rounded-lg shadow-md dark:border-gray-700">
      <MotionElement
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-left text-xl mb-3 font-semibold">Send Me Email</h1>
        <PForm
          onSubmit={onSubmit}
          resolver={zodResolver(contactMeEmailSchema)}
          className="grid sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-6"
        >
          <PInput
            name="name"
            label="Name"
            type="text"
            size="lg"
            className="text-gray-800 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
          />
          <PInput
            name="email"
            label="Email"
            type="email"
            size="lg"
            className="text-gray-800  dark:border-gray-700 dark:placeholder-gray-400"
          />
          <div className="sm:col-span-2">
            <PTextarea
              name="message"
              label="Enter Your Message"
              size="lg"
              className="text-gray-800  dark:border-gray-700 dark:placeholder-gray-400"
            />
          </div>
          <PButton
            isLoading={loading}
            className="sm:col-span-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 duration-100 w-fit px-10 mt-6 flex items-center gap-x-2"
            buttonText={
              <>
                <span>Send Email</span>
                <BiMailSend size={24} />
              </>
            }
          />
        </PForm>
      </MotionElement>
    </div>
  );
}
