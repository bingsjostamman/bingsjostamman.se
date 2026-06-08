import './button.css';

export const createButton = ({
  variant = 'primary',
  href,
  label,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const classes = ['c-button'];

  if (variant && variant !== 'primary') {
    classes.push(`c-button--${variant}`);
  }

  if (className) {
    classes.push(className);
  }

  if (href) {
    const link = document.createElement('a');
    link.href = href;
    link.className = classes.join(' ');
    link.innerText = label;
    return link;
  }

  const btn = document.createElement('button');
  btn.type = type;
  btn.className = classes.join(' ');
  btn.innerText = label;
  btn.disabled = disabled;

  return btn;
};
