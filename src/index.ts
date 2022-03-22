import mongoose from 'mongoose';

import { app } from './app';
import { connectMongoDb } from './connect-mongo';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  try {
    await connectMongoDb(mongoose);
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  let PORT = process.env.PORT_CUSTOM ? process.env.PORT_CUSTOM : 3000;
  app.listen(PORT, () => {
    console.log(`'Listening on port ${PORT}!!!'`);
  });
};

start();
