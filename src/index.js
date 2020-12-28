import addNumbers from './add'
import minusNumbers from './minus'
import './index.css'
import './index.less'
import './index.scss'
import yuanshen from './images/yuanshen.png'


const box = document.querySelector('.box')
box.innerHTML += `
    <img src="${yuanshen}" />
`

console.log(addNumbers(1,1));
console.log(minusNumbers(1,1));