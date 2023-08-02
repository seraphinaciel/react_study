// src/index.page.server.js
import { html } from 'vite-plugin-ssr';
import Index from './pages/Index';

export default function render() {
  return html`<${Index} />`;
}
