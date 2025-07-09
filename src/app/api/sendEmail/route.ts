import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: "felipefrizzovg@gmail.com",
      subject: `Novo contato de ${name}`,
      text: `Nome: ${name} \n E-mail? ${email} \n Mensagem? ${message}`,
      replyTo: email,
    })

    return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: "Falha ao enviar e-mail" }, { status: 500 })
  }
}