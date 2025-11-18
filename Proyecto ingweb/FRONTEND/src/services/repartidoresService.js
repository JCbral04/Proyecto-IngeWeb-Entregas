// Usar la variable de entorno o una URL por defecto si no está definida
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_URL = `${API_BASE}/repartidores`;

// Para depuración
console.log('URL de la API de repartidores:', API_URL);

export async function obtenerRepartidores() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener repartidores:', error);
    throw error;
  }
}

export async function crearRepartidor(data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al crear repartidor:', error);
    throw error;
  }
}

export async function actualizarRepartidor(id, data) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al actualizar repartidor:', error);
    throw error;
  }
}

export async function eliminarRepartidor(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al eliminar repartidor:', error);
    throw error;
  }
}
