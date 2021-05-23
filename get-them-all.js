export const getArchitects = () => [Array.from(document.getElementsByTagName('a')), Array.from(document.getElementsByTagName('span'))]
export const getClassical = () => [Array.from(document.getElementsByClassName('classical')), Array.from(document.querySelectorAll('a:not(.classical)'))]
export const getActive = () => [Array.from(document.getElementsByClassName('active')), Array.from(document.querySelectorAll('a:not(.active)'))]
export const getBonannoPisano = () => [document.getElementById('BonannoPisano'), Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))]