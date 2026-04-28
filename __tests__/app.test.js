import { jest } from '@jest/globals';
import { validateUser } from '../src/validator.js';
import { fetchUser } from '../src/api.js';

describe('validator', () => {
  test('datos válidos', () => {
    const user = {
      name: 'Ana Pérez',
      email: 'ana.perez@example.com',
      address: { city: 'Madrid' },
    };

    expect(validateUser(user)).toBeNull();
  });

  test('email inválido', () => {
    const user = {
      name: 'Juan',
      email: 'juan@@example',
      address: { city: 'Barcelona' },
    };

    expect(validateUser(user)).toBe('El correo electrónico no es válido');
  });

  test('nombre vacío', () => {
    const user = {
      name: '   ',
      email: 'juan@example.com',
      address: { city: 'Valencia' },
    };

    expect(validateUser(user)).toBe('El nombre no puede estar vacío');
  });

  test('ciudad vacía', () => {
    const user = {
      name: 'Lucía',
      email: 'lucia@example.com',
      address: { city: ' ' },
    };

    expect(validateUser(user)).toBe('La ciudad no puede estar vacía');
  });

  test('respuesta incompleta de la API', () => {
    const user = {
      name: 'Pedro',
      email: 'pedro@example.com',
      address: null,
    };

    expect(validateUser(user)).toBe('La ciudad no puede estar vacía');
  });
});

describe('fetchUser', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('error de red', async () => {
    global.fetch.mockRejectedValue(new Error('Fallo de red'));

    await expect(fetchUser()).rejects.toThrow('Fallo de red');
  });
});
