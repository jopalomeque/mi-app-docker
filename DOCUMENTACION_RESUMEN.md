# 📋 RESUMEN DE DOCUMENTACIÓN - PRÁCTICA 5

## ✅ Imágenes de Evidencia Capturadas

### 1. **frontend-screenshot.png** (17.91 KB)
   - Frontend ejecutándose con datos cargados desde API
   - Muestra: Nombre, Correo, Ciudad (datos validados)
   - Evidencia de consumo exitoso de jsonplaceholder.typicode.com/users/1

### 2. **practica5-doc-1.png** (19.65 KB)
   - Diagrama de arquitectura del stack
   - Flujo: Navegador → nginx:8080 → (red interna) → json-server:80
   - Muestra separación de redes y aislamiento de la API

### 3. **practica5-doc-2.png** (18.62 KB)
   - Archivos de configuración clave:
     - docker-compose.yml: definición de servicios
     - nginx.conf: proxy inverso (proxy_pass http://api:80/)
     - db.json: datos de json-server

### 4. **practica5-doc-3.png** (21.82 KB)
   - Endpoints REST disponibles
   - Tabla de flujo de comunicación
   - Secuencia: Navegador → nginx → api (red interna)

## 📄 Documentos Generados

### Proyecto Final - Práctica 5 Documentado.docx (103.63 KB)
- Contiene todas las imágenes de evidencia
- 144 párrafos con descripciones detalladas
- 4 relaciones con imágenes (capturas PNG)
- Secciones:
  1. Documentación de requisitos
  2. Evidencia visual de arquitectura
  3. Configuración de servicios
  4. Endpoints y flujo de comunicación

## 🎯 Requerimientos Documentados

✅ Separación de servicios (web sin puertos expuestos en api)
✅ Red privada de Docker (mi-red-interna)
✅ Proxy inverso (nginx.conf → proxy_pass http://api:80/)
✅ Datos JSON (db.json) servidos por json-server
✅ Frontend consumiendo API local
✅ Validación de datos antes de mostrar
✅ Manejo de errores de red
✅ Modularización del código (app.js, api.js, validator.js)
✅ Pruebas unitarias con Jest
✅ Scripts de testing (npm test, npm run test:ci)

## 📊 Estadísticas

- **Imágenes capturadas**: 4 PNG
- **Documentos generados**: 2 DOCX
- **Párrafos totales**: 144
- **Tamaño con evidencia**: 103.63 KB
- **Cobertura visual**: 100% (arquitectura, configuración, endpoints, frontend)

## 🚀 Archivos en el Repositorio

```
mi-app-docker/
├── index.html                          ← Frontend principal
├── app.js                              ← Lógica del frontend
├── src/
│   ├── api.js                          ← Módulo de consumo de API
│   └── validator.js                    ← Módulo de validación
├── __tests__/
│   └── app.test.js                     ← Pruebas con Jest (6 tests)
├── docker-compose.yml                  ← Stack: nginx + json-server
├── nginx.conf                          ← Proxy inverso
├── db.json                             ← Datos de la API
├── package.json                        ← Scripts: npm test, npm run test:ci
├── Dockerfile                          ← Imagen docker para nginx
├── practica5-documentacion.html        ← Guía visual HTML
├── frontend-screenshot.png             ← Captura del frontend
├── practica5-doc-*.png                 ← Capturas de documentación (3)
└── Proyecto Final - Práctica 5 Documentado.docx ← Informe con imágenes
```

---
Generado: 28 de abril del 2026
Estudiante: John Guillermo Palomeque Avila
