const tabs = document.querySelectorAll('#main-tabs li')
let content = []
const tab1 = document.querySelector('#tabContent1')
const tab2 = document.querySelector('#tabContent2')
const tab3 = document.querySelector('#tabContent3')
content.push(tab1)
content.push(tab2)
content.push(tab3)

tabs.forEach(tab => tab.addEventListener('click',(e) => {
    tabs.forEach(t => t.classList.remove('active'))
   tab.classList.add('active')
   console.log(tab)
  let href = tab.getAttribute('href')
  console.log(href)
  content.forEach(one => {
      one.classList.add('hide')
      if(`#${one.id}` == href){
          console.log("Herer")
        one.classList.remove('hide')
      }
  })


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