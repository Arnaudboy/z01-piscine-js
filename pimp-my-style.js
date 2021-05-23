import {styles} from './pimp-my-style.data.js'
export function pimp() {
    let button = document.getElementsByClassName('button')[0]
    let classes = button.classList.value.split(' ')
    if(classes.length < 16 && classes.indexOf('unpimp') === -1) {button.classList.add(styles[classes.length - 1])}
    if(classes.length === 15 && classes.indexOf('unpimp') === -1) {button.classList.add('unpimp')}
    if(classes.length > 3 && classes.indexOf('unpimp') != -1) {button.classList.remove(classes[classes.length - 2])}
    if(classes.length === 3 && classes.indexOf('unpimp') != -1) {button.className = 'button'}
}