import { writable } from 'svelte/store';

const storedDarkMode = localStorage.darkMode;

export const darkMode = writable(storedDarkMode || 'false');

if (storedDarkMode == 'true') {
    window.document.body.classList.toggle('dark');
}

darkMode.subscribe(value => {

    localStorage.darkMode = value;

    // console.table([['Darkmode LS ',localStorage.darkMode], ['Darkmode Store ',value]]);

});

