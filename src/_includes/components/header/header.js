// Pulls in menu styles and behaviour for the Header component.
// On the main site these are handled by main.js; this file ensures
// the auto-generated Header story in Storybook includes everything.
import '../menu/menu.css';
import { initMenu } from '../menu/menu.js';

export function initHeader(root = document) {
  root.querySelectorAll('[data-menu]').forEach((el) => initMenu(el));
}
