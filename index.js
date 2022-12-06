
import { writeFile } from 'fs/promises';
const swaggerJsdoc = require('swagger-jsdoc');

const generateJsdoc = (config) => (async () => {
    const swaggerJson = JSON.stringify(swaggerJsdoc(config), null, 2);
    await writeFile("./jsdoc.json", swaggerJson);
});

const jsdocPlugin = ({config}) => ({
  name: 'jsdocPlugin',
  async setup(build) {
    build.onEnd(generateJsdoc(config));
  }
});

export default jsdocPlugin;