"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/server/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { linkedInLink, githubLink } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(90%,38rem)] text-center mt-[4rem]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Toaster position="top-right" />
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 dark:text-gray-300 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ishika03@student.ubc.ca">
          ishika03@student.ubc.ca
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col gap-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-gray-300 text-black placeholder:text-gray-500 bg-white"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          id="senderEmail"
        />

        <textarea
          className="h-52 px-4 py-3 rounded-lg border border-gray-300 text-black placeholder:text-gray-500 bg-white"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          id="message"
        />

        <div className="mt-4 self-center">
          <SubmitBtn />
        </div>
      </form>

      <div className="flex flex-row justify-center items-center gap-4 mt-6">
        <Link href={linkedInLink} passHref target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          />
        </Link>
        <Link href={githubLink} passHref target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-gray-600 dark:text-gray-300 hover:text-white"
          />
        </Link>
      </div>
    </motion.section>
  );
}
