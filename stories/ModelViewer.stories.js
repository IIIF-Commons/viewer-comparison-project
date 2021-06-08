import { createViewer } from './ModelViewer';

export default {
  title: 'Example/ModelViewer',
  argTypes: {
    src: { control: 'text' },
    // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select', options: ['small', 'medium', 'large'] },
    // },
    // onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createViewer({ label, ...args });
};

export const Src = Template.bind({});
Src.args = {
  src: "https://iiif-3d-assets.netlify.app/gltf/astronaut/_astronaut/Astronaut.glb",
};

export const CameraControls = Template.bind({});
CameraControls.args = {
  src: "https://iiif-3d-assets.netlify.app/gltf/astronaut/_astronaut/Astronaut.glb",
  cameraControls: true,
};

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
