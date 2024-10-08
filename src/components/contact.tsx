"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/send-email";
import axios from "axios";
import SubmitBtn from "./submit-btn";
import { toast } from "sonner"


const Contact = () => {
    const { ref } = useSectionInView("Contact");
    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a
                    className="underline"
                    href="mailto:samirnandan2003@gmail.com"
                >
                    samirnandan2003@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const senderEmail = formData.get("senderEmail");
                    const message = formData.get("message");
                    const data = {
                        email: senderEmail,
                        message: message,
                    };
                    const payload = JSON.stringify(data);
                    const response = await axios.post(
                        "/api/send-email",
                        payload
                    );
                    if (response.data.status === 200) {
                        toast.success("Email sent successfully!", {
                            action: {
                                label: "OK!",
                                onClick: () => {}
                            },
                        });
                    } else {
                        toast.error("Error sending email");
                    }
                    // if (error) {
                    //     toast.error(error);
                    //     console.log(error);
                    //     return;
                    // }

                    // toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
};
export default Contact;
