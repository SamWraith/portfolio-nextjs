import { sendEmail } from "@/helpers/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, message } = reqBody;
        if (!email || !message) {
            return NextResponse.json({
                status: 400,
                body: "Please provide both email and message",
            });
        }
        await sendEmail({ email, message });

        // if (!response) {
        //     return NextResponse.json({
        //         status: 500,
        //         message: "Error while sending email",
        //     });
        // }
        return NextResponse.json({
            status: 200,
            message: "Email sent successfully",
            email: email,
            userMessage: message,
        });
    } catch (error: any) {
        console.log("Error while send email: ", error.message);
        return NextResponse.json({
            status: 500,
            message: "Error sending email",
        });
    }
}
