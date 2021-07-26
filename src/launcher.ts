

import { Routes } from './routes';
import {config as dotenv} from 'dotenv'
import { InitDatabase } from './database/database';
import { InitApp } from './app';

dotenv()

const uri = process.env.MONGO_URL_CONNECTION_BD_LOCAL || process.env.MONGO_URL_CONNECTION_BD_DEV

export const Launcher = () => {
    InitDatabase(uri);
    InitApp(Routes());
}