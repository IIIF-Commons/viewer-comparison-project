import './model-viewer.css';

export const createViewer = ({
  src,
  cameraControls,
}) => {

  const viewer = document.createElement('model-viewer');
  viewer.src = src;
  viewer.style = "width: 400px; height: 300px";
  
  if (cameraControls) {
    viewer.setAttribute('camera-controls', true);
  }

  return viewer;

  // const btn = document.createElement('button');
  // btn.type = 'button';
  // btn.innerText = label;
  // btn.addEventListener('click', onClick);

  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  // btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  // return btn;
};
