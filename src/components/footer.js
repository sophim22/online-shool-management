// src/components/footer.js
export function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = '<p>&copy; 2024 Firebase Project</p>';
  return footer;
}
