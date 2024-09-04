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

        // OPTION 1

        // const mailOptions = {
        //     from: "wraith3103@gmail.com",
        //     to: "samirnandan2003@gmail.com",
        //     subject: `Message from contact form: ${email}`,
        //     // react: React.createElement(ContactFormEmail, {
        //     //     message: message,
        //     //     senderEmail: email,
        //     // }),
        //     html: ` <h1> Email from ${email}</h1>
        //             <p>${message}</p>`,
        // };


        //  OPTION 2


        // const mailOptions = {
        //     from: "wraith3103@gmail.com",
        //     to: "samirnandan2003@gmail.com",
        //     subject: `Message from contact form: ${email}`,
        //     html: `
        //         <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px;">
        //             <h1 style="font-size: 24px; color: #007BFF; text-align: center;">You've got a new message!</h1>
        //             <p style="font-size: 16px; color: #555;">Hello,</p>
        //             <p style="font-size: 16px; color: #555;">You have received a new message from the contact form.</p>
        //             <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        //                 <h2 style="font-size: 20px; color: #333;">Message Details:</h2>
        //                 <p style="font-size: 16px; color: #555;"><strong>Sender:</strong> ${email}</p>
        //                 <p style="font-size: 16px; color: #555;"><strong>Message:</strong></p>
        //                 <p style="font-size: 16px; color: #555;">${message}</p>
        //             </div>
        //             <p style="font-size: 14px; color: #999; text-align: center;">Thank you for using our service!</p>
        //         </div>
        //     `,
        // };



        // OPTION 3

        // const mailOptions = {
        //     from: "wraith3103@gmail.com",
        //     to: "samirnandan2003@gmail.com",
        //     subject: `Message from contact form: ${email}`,
        //     html: `
        //         <div style="font-family: Arial, sans-serif; color: #e0e0e0; background-color: #1c1c1c; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #333; border-radius: 8px;">
        //             <h1 style="font-size: 24px; color: #4A90E2; text-align: center;">You've got a new message!</h1>
        //             <p style="font-size: 16px; color: #cccccc;">Hello,</p>
        //             <p style="font-size: 16px; color: #cccccc;">You have received a new message from the contact form.</p>
        //             <div style="background-color: #2a2a2a; padding: 15px; border-radius: 8px; margin: 20px 0;">
        //                 <h2 style="font-size: 25px; color: #e0e0e0;">Message Details:</h2>
        //                 <p style="font-size: 20px; color: #cccccc;"><strong>Sender:</strong> ${email}</p>
        //                 <p style="font-size: 20px; color: #cccccc;"><strong>Message:</strong></p>
        //                 <p style="font-size: 20px; color: #cccccc;">${message}</p>
        //             </div>
        //             <p style="font-size: 14px; color: #777; text-align: center;">Thank you for using our service!</p>
        //         </div>
        //     `,
        // };


        // OPTION 4

        const mailOptions = {
            from: "wraith3103@gmail.com",
            to: "samirnandan2003@gmail.com",
            subject: `Message from contact form: ${email}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #e0e0e0; background-color: #1c1c1c; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #333; border-radius: 8px;">
                    <h1 style="font-size: 24px; text-align: center; background: linear-gradient(90deg, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent;">You've got a new message!</h1>
                    <p style="font-size: 16px; color: #cccccc;">Hello,</p>
                    <p style="font-size: 16px; color: #cccccc;">You have received a new message from the contact form.</p>
                    <div style="background-color: #2a2a2a; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <h2 style="font-size: 25px; color: #e0e0e0;">Message Details:</h2>
                        <p style="font-size: 20px; color: #cccccc;"><strong>Sender:</strong> ${email}</p>
                        <p style="font-size: 20px; color: #cccccc;"><strong>Message:</strong></p>
                        <p style="font-size: 20px; color: #cccccc;">${message}</p>
                    </div>
                    <p style="font-size: 14px; color: #777; text-align: center;">Thank you for using our service!</p>
                </div>
            `,
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
