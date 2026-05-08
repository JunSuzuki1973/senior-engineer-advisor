export class Toast {
  constructor() {
    this.container = document.getElementById('toast-container');
  }

  show(message, type = 'info') {
    if (!this.container) return;

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const icons = { success: '✓', info: 'ℹ', warning: '⚠' };
    toast.innerHTML = '<span>' + (icons[type] || '•') + '</span> ' + message;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 300);
    }, 3000);
  }
}