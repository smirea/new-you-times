import './index.css';
import { mount } from 'svelte';
import App from './App.svelte';

const target = document.querySelector('#root');
if (!target) throw new Error('Root element not found');

const app = mount(App, { target });

export default app;
