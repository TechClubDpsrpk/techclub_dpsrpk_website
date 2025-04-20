`use server`;
import nodemailer from 'nodemailer';

export async function send_mail(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string | null;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      return { success: false, error: 'Missing required fields.' };
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example: Use Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECIPIENT_EMAIL, // Recipient email address
      subject: `Message from ${name}`,
      text: `You have a new message from your website contact form:\n\n
              Name: ${name}\n
              Email: ${email}\n
              Phone Number: ${phoneNumber || 'N/A'}\n
              \n ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send message.' };
  }
}
