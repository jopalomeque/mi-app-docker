const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

export async function fetchUser() {
  const response = await fetch(API_URL, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  const data = await response.json();

  if (!data || typeof data !== 'object') {
    throw new Error('Respuesta inválida de la API');
  }

  return data;
}
