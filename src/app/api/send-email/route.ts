import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, title, message } = await req.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_EMAIL_USER,
                pass: process.env.NEXT_EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.NEXT_EMAIL_USER}>`,
            replyTo: email,
            to: process.env.NEXT_EMAIL_RECEIVER,
            subject: title,
            text: message,
        });

        return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json({ success: false, message: "Erro ao enviar e-mail." }, { status: 500 });
    }
}
