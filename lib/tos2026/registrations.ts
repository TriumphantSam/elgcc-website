import fs from 'fs';
import path from 'path';
import { PaymentStatus, Registration } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'tos2026-registrations.json');

export function ensureRegistrationDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
  }
}

export function getLocalRegistrations(): Registration[] {
  ensureRegistrationDataFile();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

export function saveLocalRegistration(registration: Registration) {
  const existing = getLocalRegistrations();
  existing.push(registration);
  fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

export function getLocalRegistration(registrationId: string) {
  const existing = getLocalRegistrations();
  return existing.find((registration) => registration.registrationId === registrationId) || null;
}

export function updateLocalRegistrationPayment(
  registrationId: string,
  payment: {
    status: PaymentStatus;
    paymentReference?: string;
    flutterwaveTransactionId?: string;
    paidAt?: string;
  }
) {
  const existing = getLocalRegistrations();
  let updated = false;

  const next = existing.map((registration) => {
    if (registration.registrationId !== registrationId) {
      return registration;
    }

    updated = true;
    return {
      ...registration,
      paymentStatus: payment.status,
      paymentReference: payment.paymentReference || registration.paymentReference,
      flutterwaveTransactionId: payment.flutterwaveTransactionId || registration.flutterwaveTransactionId,
      paidAt: payment.paidAt || registration.paidAt,
    };
  });

  if (updated) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(next, null, 2), 'utf-8');
  }

  return updated;
}
