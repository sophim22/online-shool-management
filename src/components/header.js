// src/components/header.js
export function renderHeader() {
  const header = document.createElement('header');
  header.innerHTML = '<h1>Welcome to Firebase Project</h1>';
  return header;
}
