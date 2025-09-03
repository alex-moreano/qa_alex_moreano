# Pasos de ejecucion (rapido)

Guia para correr el proyecto. 

## 1) Entorno
- Necesita Node.js 18+ y npm (una vercion LTS esta ok)
- Verifique rapido:
```bash
node -v
npm -v
```

## 2) Instalar dependecias
Desde la raiz del repo:
```bash
npm install
```

## 3) Correr las pruebas

- Modo interactivo del cypress:
```bash
npm run cy:open
```

- Correr tests en petsore:
```bash
npm run test:api
```

- Test automatizado en saucedemo:
```bash
npm run test:e2e
```

- Correr todos los tests:
```bash
npm run test:all
```

## 4) Para ver los reportes y evidencias
- Reporte HTML: `cypress/reports/index.html`
- Videos: `cypress/videos`
- Screenshots (si hay fallos): `cypress/screenshots`

## 5) Tips rapidos (por si algo no anda)
- Si la instalacion falla: revisar conexion/proxy.
- PetStore es publico y a veces responde con errores 5xx esporadicos; reintente.

Asegurese de ejecutar los comandos desde la carpeta raiz del proyecto.
Alex Moreano.