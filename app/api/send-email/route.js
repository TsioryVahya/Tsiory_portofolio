import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: email, 
    to: process.env.EMAIL_USER,
    subject: `Offre par Portofolio :Nouveau message de ${firstname} ${lastname}`,
    text: `Nom: ${firstname} ${lastname}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
