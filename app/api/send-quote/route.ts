import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      firstName,
      lastName,
      address,
      email,
      phone,
      description,
      company, // honeypot
    } = body

    /* ============================
       🛡 1. HONEYPOT ANTI-SPAM
    ============================ */
    if (company && company.trim() !== "") {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      )
    }

    /* ============================
       🛡 2. VALIDATION
    ============================ */
    if (!firstName || !lastName || !email || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    /* ============================
       📧 3. SMTP CONFIG (cPanel)
    ============================ */
    const transporter = nodemailer.createTransport({
      host: "mail.sunlikeserv.com", // confirme dans cPanel si besoin
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    /* ============================
       4️⃣ EMAIL TO SUNLIKE
    ============================ */
    await transporter.sendMail({
      from: `"Sunlike South Services" <sunlike@sunlikeserv.com>`,
      to: "sunlike@sunlikeserv.com",
      subject: "New Quote Request - Website",
      html: `
        <h2>New Quote Request</h2>
        <hr/>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Address:</strong> ${address || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <br/>
        <p><strong>Project Description:</strong></p>
        <p>${description}</p>
      `,
    })

    /* ============================
       5️⃣ AUTO REPLY TO CLIENT
    ============================ */
    await transporter.sendMail({
      from: `"Sunlike South Services" <sunlike@sunlikeserv.com>`,
      to: email,
      subject: "We received your request - Sunlike South Services",
      html: `
        <div style="font-family:Arial, sans-serif; line-height:1.6;">
          <h2>Thank you ${firstName},</h2>

          <p>
            We have successfully received your quote request.
          </p>

          <p>
            Our team will carefully review your project details and
            get back to you as soon as possible.
          </p>

          <br/>

          <p>
            Best regards,<br/>
            <strong>Sunlike South Services</strong><br/>
            Renewable Energy & Industrial Solutions
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("EMAIL ERROR:", error)

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
