import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages "project sites" are served from https://<user>.github.io/<repo-name>/
 * so every asset URL must be prefixed with "/<repo-name>/".
 *
 * >>> CHANGE THIS to match your GitHub repository name (keep both slashes). <<<
 *
 * - Repo "kindergarten-site"            -> '/kindergarten-site/'
 * - User/org site (<user>.github.io)    -> '/'
 * - Custom domain                       -> '/'
 */
const REPO_BASE = '/kindergarten-site/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // In dev we serve from "/", only the production build needs the repo prefix.
  base: command === 'build' ? REPO_BASE : '/',
}));
