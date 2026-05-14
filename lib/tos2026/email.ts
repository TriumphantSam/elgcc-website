import nodemailer from 'nodemailer';
import { Registration } from './types';
import { formatPrice } from './pricing';

const DEFAULT_CHURCH_EMAIL = 'eternallifegcc@gmail.com';

function getContactEmail() {
  return process.env.TOS_CONTACT_EMAIL || DEFAULT_CHURCH_EMAIL;
}

function getAdminEmail(emailUser: string) {
  return process.env.TOS_ADMIN_EMAIL || process.env.TOS_ALERT_EMAIL || DEFAULT_CHURCH_EMAIL || emailUser;
}

function getEmailTransport() {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    return null;
  }

  return {
    emailUser,
    transporter: nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    }),
  };
}

export async function getEmailDiagnostics() {
  const email = getEmailTransport();

  if (!email) {
    return {
      configured: false,
      connected: false,
      from: '',
      adminCopyTo: getContactEmail(),
      contactEmail: getContactEmail(),
      error: 'EMAIL_USER or EMAIL_PASS is missing.',
    };
  }

  try {
    await email.transporter.verify();
    return {
      configured: true,
      connected: true,
      from: email.emailUser,
      adminCopyTo: getAdminEmail(email.emailUser),
      contactEmail: getContactEmail(),
      error: '',
    };
  } catch (error) {
    return {
      configured: true,
      connected: false,
      from: email.emailUser,
      adminCopyTo: getAdminEmail(email.emailUser),
      contactEmail: getContactEmail(),
      error: error instanceof Error ? error.message : 'Unable to connect to the email account.',
    };
  }
}

export async function sendConfirmationEmail(registration: Registration) {
  const email = getEmailTransport();

  if (!email) {
    console.warn('Email credentials not set. Skipping confirmation email.');
    return;
  }

  const contactEmail = getContactEmail();
  const adminEmail = getAdminEmail(email.emailUser);
  const coordinatorEmail = registration.coordinator.emailAddress;
  const isGroupRegistration = registration.registrationType === 'group' || registration.attendees.length > 1;
  const contactLabel = isGroupRegistration ? 'Coordinator' : 'Registrant';
  const contactSectionTitle = `${contactLabel} Details`;
  const attendeeListHtml = registration.attendees.map(att => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>${att.fullName}</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-transform: capitalize;">${att.category.replace('_', ' ')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${att.gender}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${att.phoneNumber || '-'}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${att.emailAddress || '-'}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${att.region || '-'}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${att.localChurch || '-'}</td>
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
        <p>Thank you for registering for Training of the Spirit 2026. Your payment has been confirmed and your registration is complete.</p>
        
        <div style="background-color: #F5F1E8; padding: 20px; border-radius: 6px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #1A2A0F;">Registration Details</h3>
          <p style="margin: 5px 0;"><strong>Registration ID:</strong> <span style="font-family: monospace; color: #D4A843;">${registration.registrationId}</span></p>
          <p style="margin: 5px 0;"><strong>Payment Status:</strong> Confirmed</p>
          <p style="margin: 5px 0;"><strong>Payment Reference:</strong> <span style="font-family: monospace;">${registration.paymentReference || 'N/A'}</span></p>
          <p style="margin: 5px 0;"><strong>Total Amount:</strong> ${formatPrice(registration.totalAmount)}</p>
          <p style="margin: 5px 0;"><strong>Total Attendees:</strong> ${registration.attendees.length}</p>
        </div>

        <div style="background-color: #fff; border: 1px solid #eee; padding: 20px; border-radius: 6px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #1A2A0F;">${contactSectionTitle}</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${registration.coordinator.fullName}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${registration.coordinator.phoneNumber}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${registration.coordinator.emailAddress}</p>
          <p style="margin: 5px 0;"><strong>Church/Organization:</strong> ${registration.coordinator.churchName}</p>
        </div>

        <h3 style="color: #1A2A0F;">Attendee List</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; text-align: left; font-size: 12px;">
          <thead>
            <tr style="background-color: #f9f9f9;">
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Name</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Category</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Gender</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Phone</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Email</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Region</th>
              <th style="padding: 10px; border-bottom: 2px solid #ddd;">Local Church</th>
            </tr>
          </thead>
          <tbody>
            ${attendeeListHtml}
          </tbody>
        </table>

        <p><strong>Event Details:</strong></p>
        <p style="margin: 5px 0;">📅 Date: August 3 – 8, 2026</p>
        <p style="margin: 5px 0;">📍 Venue: To be announced</p>

        <p style="margin-top: 30px; font-size: 13px; color: #666; border-top: 1px solid #eee; padding-top: 20px;">
          If you have any questions or need to correct any registration detail, please email ${contactEmail}.
        </p>
      </div>
    </div>
  `;

  try {
    await email.transporter.sendMail({
      from: `"ELGCC TOS 2026" <${email.emailUser}>`,
      to: coordinatorEmail,
      bcc: adminEmail.toLowerCase() !== coordinatorEmail.toLowerCase() ? adminEmail : undefined,
      replyTo: contactEmail,
      subject: `Confirmation: TOS 2026 Registration (${registration.registrationId})`,
      html,
    });
    console.log(`Confirmation email sent to ${coordinatorEmail}; admin copy sent to ${adminEmail}.`);
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
  }
}

export async function sendAdminAlertEmail(subject: string, message: string) {
  const email = getEmailTransport();

  if (!email) {
    console.warn('Email credentials not set. Skipping admin alert email.');
    return false;
  }

  const alertEmail = process.env.TOS_ALERT_EMAIL || email.emailUser;

  try {
    await email.transporter.sendMail({
      from: `"ELGCC Website Monitor" <${email.emailUser}>`,
      to: alertEmail,
      subject,
      text: message,
    });
    return true;
  } catch (error) {
    console.error('Failed to send admin alert email:', error);
    return false;
  }
}
