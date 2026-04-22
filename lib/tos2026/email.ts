import nodemailer from 'nodemailer';
import { Registration } from './types';
import { formatPrice } from './pricing';

export async function sendConfirmationEmail(registration: Registration) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  if (!emailUser || !emailPass) {
    console.warn('Email credentials not set. Skipping confirmation email.');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const attendeeListHtml = registration.attendees.map(att => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>${att.fullName}</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-transform: capitalize;">${att.category.replace('_', ' ')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${att.gender}</td>
    </tr>
  `).join('');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #1A2A0F; padding: 30px; text-align: center;">
        <h1 style="color: #D4A843; margin: 0; font-size: 24px;">TRAINING OF THE SPIRIT 2026</h1>
        <p style="color: #F5F1E8; margin-top: 10px; opacity: 0.8;">Registration Confirmation</p>
      </div>
      
      <div style="padding: 30px;">
        <p>Dear <strong>${registration.coordinator.fullName}</strong>,</p>
        <p>Thank you for registering for Training of the Spirit 2026. Your registration has been successfully received!</p>
        
        <div style="background-color: #F5F1E8; padding: 20px; border-radius: 6px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #1A2A0F;">Registration Details</h3>
          <p style="margin: 5px 0;"><strong>Registration ID:</strong> <span style="font-family: monospace; color: #D4A843;">${registration.registrationId}</span></p>
          <p style="margin: 5px 0;"><strong>Church/Organization:</strong> ${registration.coordinator.churchName}</p>
          <p style="margin: 5px 0;"><strong>Total Attendees:</strong> ${registration.attendees.length}</p>
          <p style="margin: 5px 0;"><strong>Total Amount:</strong> ${formatPrice(registration.totalAmount)}</p>
        </div>

        <h3 style="color: #1A2A0F;">Attendee List</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; text-align: left; font-size: 14px;">
          <thead>
            <tr style="background-color: #f9f9f9;">
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Name</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Category</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Gender</th>
            </tr>
          </thead>
          <tbody>
            ${attendeeListHtml}
          </tbody>
        </table>

        <p><strong>Event Details:</strong></p>
        <p style="margin: 5px 0;">📅 Date: August 3 – 8, 2026</p>
        <p style="margin: 5px 0;">📍 Venue: Coming Soon</p>

        <p style="margin-top: 30px; font-size: 13px; color: #666; border-top: 1px solid #eee; padding-top: 20px;">
          If you have any questions or need to make changes to your registration, please reply to this email or contact the ELGCC admin team.
        </p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ELGCC TOS 2026" <${emailUser}>`,
      to: registration.coordinator.emailAddress,
      subject: `Confirmation: TOS 2026 Registration (${registration.registrationId})`,
      html,
    });
    console.log(`Confirmation email sent to ${registration.coordinator.emailAddress}`);
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
  }
}
