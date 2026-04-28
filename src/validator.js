export function validateUser(user) {
  if (!user || typeof user !== 'object') {
    return 'Usuario inválido';
  }

  const name = String(user.name ?? '');
  const email = String(user.email ?? '');
  const city = user.address && typeof user.address === 'object'
    ? String(user.address.city ?? '')
    : '';

  if (!name.trim()) {
    return 'El nombre no puede estar vacío';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'El correo electrónico no es válido';
  }

  if (!city.trim()) {
    return 'La ciudad no puede estar vacía';
  }

  return null;
}
