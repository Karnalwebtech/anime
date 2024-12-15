'use server'

import { put } from '@vercel/blob';

export async function uploadToBlob(formData: FormData) {
  const file = formData.get('file') as File;
  const blob = await put(file.name, file, { access: 'public' });
  return blob.url;
}

