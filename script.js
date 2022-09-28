'use strict';

let wrapper = document.querySelector('.theme-wrapper');
let button = document.querySelector('.toggle-btn');

const toggleTheme = () => {
	let currentTheme = wrapper.dataset.theme;

	if (currentTheme === 'light') return (wrapper.dataset.theme = 'dark');
	return (wrapper.dataset.theme = 'light');
};


button.onclick = toggleTheme;
