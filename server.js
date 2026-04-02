import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads (stored in memory for security)
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

const transporter = nodemailer.createTransport({
    service: 'gmail', // or your SMTP host
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/contact', upload.single('cv'), async (req, res) => {
    try {
        const { firstName, lastName, email, phone, location, message } = req.body;
        const cvFile = req.file;

        const mailOptions = {
            from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `🚀 New Talent Inquiry: ${firstName} ${lastName}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #2a9fd8; border-bottom: 2px solid #2a9fd8; padding-bottom: 10px;">Talent Acquisition Report</h2>
                    <p><strong>Candidate:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Location:</strong> ${location}</p>
                    <hr style="border: 0; border-top: 1px solid #eee;" />
                    <h3>Candidate Statement:</h3>
                    <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
                    <br />
                    <p style="font-size: 12px; color: #666;">This message was delivered via BitCoderLabs Professional SMTP Link.</p>
                </div>
            `,
            attachments: cvFile ? [
                {
                    filename: cvFile.originalname,
                    content: cvFile.buffer
                }
            ] : []
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message and CV sent successfully!' });
    } catch (error) {
        console.error('SMTP Error:', error);
        res.status(500).json({ success: false, message: 'Failed to send email via SMTP.' });
    }
});

app.listen(port, () => {
    console.log(`Professional SMTP Server running on http://localhost:${port}`);
});
