import '../../_includes/components/icon/icon.css';

const svgModules = import.meta.glob('../../_includes/icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const icons = Object.entries(svgModules).map(([path, raw]) => ({
  name: path.split('/').pop().replace('.svg', ''),
  svg: raw,
}));

export default { title: 'Design System/Icons' };

export const AllIcons = () => {
  const container = document.createElement('div');
  container.style.padding = '2rem';
  container.style.fontFamily = 'sans-serif';
  container.innerHTML = `
    <h2>Icons</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1.5rem;">
      ${icons
        .map(
          ({ name, svg }) => `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <span class="icon" style="font-size: 2rem;" aria-hidden="true">${svg}</span>
          <code style="font-size: 0.75rem;">${name}</code>
        </div>
      `
        )
        .join('')}
    </div>
  `;
  return container;
};
