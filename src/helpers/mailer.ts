import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import React from "react";

export const sendEmail = async ({
    email,
    message,
}: {
    email: string;
    message: string;
}) => {
    try {
        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            // port: 465,
            secure: false,
            // ignoreTLS: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        const mailOptions = {
            from: "wraith3103@gmail.com",
            to: "samirnandan2003@gmail.com",
            subject: `Message from contact form: ${email}`,
            // react: React.createElement(ContactFormEmail, {
            //     message: message,
            //     senderEmail: email,
            // }),
            html: ` <h1> Email from ${email}</h1>
                    <p>${message}</p>`,
        };
        console.log("Processing your email");
        const mailResponse = await transport.sendMail(mailOptions);
        if (!mailResponse) {
            return NextResponse.json({
                error: "Error sending email",
                stats: 500,
            });
        }
        console.log("---------Mail sent------------");
        return mailResponse;
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: error.message, stats: 500 });
    }
};
