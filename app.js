import express from 'express';
// import { status } from 'express/lib/response';

import { api } from './config/config.js';

import user from './router/user.js';

const app = express();

//ROUTERS
app.use('/api/user', user);

//SERVIDOR ACTIVO
app.listen(api.port, () => {
    console.log('servidor corriendo en el puerto => ', api.port)
});