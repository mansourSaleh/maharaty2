const tabs = document.querySelectorAll('#main-tabs li')

tabs.forEach(tab => tab.addEventListener('click',(e) => {
    tabs.forEach(t => t.classList.remove('active'))
   tab.classList.add('active')
}))

const lis = document.querySelectorAll('#li-s-active li')

lis.forEach(li => li.addEventListener('click',(e) => {
    lis.forEach(t => t.classList.remove('active'))
   li.classList.add('active')
}))

const list = document.querySelectorAll('#li-curses li')

list.forEach(lii => lii.addEventListener('click',(e) => {
    list.forEach(t => t.classList.remove('active'))
   lii.classList.add('active')
}))