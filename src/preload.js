const { ipcRenderer } = require("electron");



window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    const text = document.querySelector('input').value;
    ipcRenderer.invoke('test', text);
  })
})