const fs = require('fs');
const path = require('path');
const swaggerSpec = require('../src/config/swagger');

const outputPath = path.join(__dirname, '..', 'swagger.json');

fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');
console.log('✅ Swagger spec exported to swagger.json');
