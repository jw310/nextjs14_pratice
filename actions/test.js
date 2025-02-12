'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const fetcher = async (url, method, { payload }) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get('Token');

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
    headers['X-Auth-Token'] = token;
  }

  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(payload),
  });

  return response.json();
};

export const test = async (payload) => {
  try {
    const response = await fetcher(
      `${process.env.NEXT_PUBLIC_BASE_API}/test`,
      'GET',
      {
        payload,
      }
    );

    return response;
  } catch (error) {
    console.log('[Failed to test]: ', error);
    return { data: null, error };
  }
};

export const sshPost = async (payload) => {
  try {
    const response = await fetcher(`http://localhost:3001`, 'POST', {
      payload,
    });

    return response;
  } catch (error) {
    console.log('[Failed to test]: ', error);
    return { data: null, error };
  }
};

export const testPOST = async (prevState, formData) => {
  const title = formData.get('title');
  const content = formData.get('content');

  let errors = [];

  // console.log(title, content);

  const payload = {
    title,
    content,
  };

  try {
    const response = await fetcher(
      `${process.env.NEXT_PUBLIC_BASE_API}/test`,
      'POST',
      {
        payload,
      }
    );

    // return response;
  } catch (error) {
    console.log('[Failed to test]: ', error);
    return { data: null, error };
  }
  redirect('/');
};
