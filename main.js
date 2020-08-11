const tabs = document.querySelectorAll('#main-tabs li')

tabs.forEach(tab => tab.addEventListener('click',(e) => {
    tabs.forEach(t => t.classList.remove('active'))
   tab.classList.add('active')
}))