import { fetchUser } from './src/api.js';
import { validateUser } from './src/validator.js';

const button = document.getElementById('load-data');
const result = document.getElementById('result');

button.addEventListener('click', handleLoad);

async function handleLoad() {
  setLoading(true);
  clearResult();

  try {
    const user = await fetchUser();
    const validationError = validateUser(user);

    if (validationError) {
      showError(validationError);
      return;
    }

    showUser(user);
  } catch (error) {
    showError(error.message || 'Error al cargar los datos');
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  button.disabled = isLoading;
  button.textContent = isLoading ? 'Cargando...' : 'Cargar usuario';
}

function clearResult() {
  result.innerHTML = '';
}

function showUser(user) {
  result.innerHTML = `
    <div class="card">
      <div class="field"><span class="label">Nombre:</span> <span class="value">${escapeHtml(user.name)}</span></div>
      <div class="field"><span class="label">Correo:</span> <span class="value">${escapeHtml(user.email)}</span></div>
      <div class="field"><span class="label">Ciudad:</span> <span class="value">${escapeHtml(user.address.city)}</span></div>
    </div>
  `;
}

function showError(message) {
  result.innerHTML = `<div class="error">Error: ${escapeHtml(message)}</div>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
