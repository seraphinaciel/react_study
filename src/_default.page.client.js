// src/index.page.client.js
import { hydrate } from 'vite-plugin-ssr/client';
import Index from './pages/Index';

hydrate(Index, { root: document.getElementById('app') });
