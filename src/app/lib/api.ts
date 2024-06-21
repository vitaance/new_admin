export const loginFetch = async ({basicURL, credentials}:{basicURL: string, credentials: {email: string, password: string}}) => {
  try {
    const response = await fetch(`${basicURL}/v2/auth/admins/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      // Log error response if status is not OK
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Network response was not ok');
    } 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}