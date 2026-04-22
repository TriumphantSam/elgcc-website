import { Registration } from './types';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function appendToGoogleSheet(registration: Registration) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    // Replace literal '\n' with actual newline characters
    const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, '\n');

    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.warn('Google Sheets credentials missing. Skipping sheet sync.');
      return;
    }

    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
    await doc.loadInfo(); // loads document properties and worksheets

    let sheet = doc.sheetsByTitle['Registrations'];
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = await doc.addSheet({
        title: 'Registrations',
        headerValues: [
          'Registration ID',
          'Date',
          'Payment Status',
          'Total Amount',
          'Coordinator Name',
          'Coordinator Phone',
          'Coordinator Email',
          'Coordinator Church',
          'Attendee Name',
          'Attendee Gender',
          'Attendee Category',
          'Attendee Phone',
          'Attendee Email',
          'Attendee Region',
          'Attendee Local Church',
          'Medical Conditions',
        ],
      });
    }

    // Flatten registration -> one row per attendee
    const rows = registration.attendees.map(att => ({
      'Registration ID': registration.registrationId,
      'Date': new Date(registration.registeredAt).toLocaleString(),
      'Payment Status': registration.paymentStatus,
      'Total Amount': registration.totalAmount,
      'Coordinator Name': registration.coordinator.fullName,
      'Coordinator Phone': registration.coordinator.phoneNumber,
      'Coordinator Email': registration.coordinator.emailAddress,
      'Coordinator Church': registration.coordinator.churchName,
      'Attendee Name': att.fullName,
      'Attendee Gender': att.gender,
      'Attendee Category': att.category.replace('_', ' '),
      'Attendee Phone': att.phoneNumber,
      'Attendee Email': att.emailAddress,
      'Attendee Region': att.region,
      'Attendee Local Church': att.localChurch,
      'Medical Conditions': att.medicalConditions || 'None',
    }));

    await sheet.addRows(rows);
    console.log(`Successfully synced registration ${registration.registrationId} to Google Sheets.`);
  } catch (error) {
    console.error('Failed to append to Google Sheets:', error);
    // Don't throw to prevent breaking the registration flow
  }
}
