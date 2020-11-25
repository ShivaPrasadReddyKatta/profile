'use strict';

const container = document.querySelector('.container');
const card = document.querySelector('.card');
const profile = document.querySelector('.profile img');
const name = document.querySelector('.info h1');
const desc = document.querySelector('.info h3');

container.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';
  profile.style.transform = 'translateZ(150px)';
  name.style.transform = 'translateZ(150px)';
  desc.style.transform = 'translateZ(150px)';
});

container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  profile.style.transform = 'translateZ(0px)';
  name.style.transform = 'translateZ(0px)';
  desc.style.transform = 'translateZ(0px)';
});
