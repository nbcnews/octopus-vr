const camera = document.querySelector('#camera');
const camPositions = {
  cam1: {
    position: {
      x: -0.477,
      y: 1.700,
      z: 7.091,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    }
  },
  cam2: {
    position: {
      x: -1.186,
      y: 1.700,
      z: -2.906,
    },
    rotation: {
      x: 7.563,
      y: -41.253,
      z: 0,
    }
  },
  cam3: {
    position: {
      x: 12.703,
      y: 0.885,
      z: -5.872,
    },
    rotation: {
      x: 0.000,
      y: 180.000,
      z: 0,
    }
  },
  cam4: {
    position: {
      x: 12.558,
      y: 1.676,
      z: -3.985,
    },
    rotation: {
      x: 0.000,
      y: 180.000,
      z: 0,
    }
  },
  cam5: {
    position: {
      x: -8.524,
      y: 6.865,
      z: -24.437,
    },
    rotation: {
      x: 5.510,
      y: -129.546,
      z: 0,
    }
  },
};

function handler(e) {
  if (!camPositions[this.id]) return;
  const to = camPositions[this.id];
  const { x: posX, y: posY, z: posZ } = to.position;
  const { x: rotX, y: rotY, z: rotZ } = to.rotation;
  const timing = 'dur: 2000';
  const easing = 'easing: easeInOutQuad';
  const posAnimation = document.createElement('a-animation');
  posAnimation.setAttribute('attribute', 'position');
  posAnimation.setAttribute('to', `${posX} ${posY} ${posZ}`);
  posAnimation.setAttribute('dur', '2000');
  posAnimation.setAttribute('easing', 'ease-in-out');
  const rotAnimation = document.createElement('a-animation');
  rotAnimation.setAttribute('attribute', 'rotation');
  rotAnimation.setAttribute('to', `${rotX} ${rotY} ${rotZ}`);
  rotAnimation.setAttribute('dur', `2000`);
  rotAnimation.setAttribute('easing', 'ease-in-out');
  posAnimation.addEventListener('animationend', () => {
    camera.removeChild(posAnimation);
  });
  rotAnimation.addEventListener('animationend', () => {
    camera.removeChild(rotAnimation);
  });
  camera.appendChild(posAnimation);
  camera.appendChild(rotAnimation);
}
var cam1 = document.getElementById('cam1');
cam1.addEventListener('click', handler);

var cam2 = document.getElementById('cam2');
cam2.addEventListener('click', handler);

var cam3 = document.getElementById('cam3');
cam3.addEventListener('click', handler);

var cam4 = document.getElementById('cam4');
cam4.addEventListener('click', handler);

var cam5 = document.getElementById('cam5');
cam5.addEventListener('click', handler);

camera.addEventListener('animationcomplete', () => {
  console.log('animationcomplete');
});
