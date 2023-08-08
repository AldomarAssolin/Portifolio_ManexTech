
// menu mobile



const menu_mobile = document.querySelector('.icon_menu')
const nav_mobile = document.querySelector('.nav_mobile')
const icon_close = document.querySelector('.bi-x-lg')
const icon_menu = document.querySelector('.bi-menu-down')


menu_mobile.addEventListener('click', () => {
    nav_mobile.classList.toggle('visible')
    menu_mobile.classList.toggle('icon_menu-rotate')    
    icon_menu.classList.toggle('bi-x-lg')    
})



document.addEventListener('click', () => {
    if(nav_mobile.className == 'visible' && menu_mobile.className == 'icon_menu-rotate'){
        nav_mobile.classList.remove('visible')
        menu_mobile.classList.remove('icon_menu-rotate')    
        icon_menu.classList.toggle('bi-menu-down') 
    }
})

// menu_mobile.addEventListener('click', () => {
    
//     // if(nav_mobile.classList.value == 'hidden'){
//     //     nav_mobile.classList.toggle('visible')
//     // }else{
//     //     nav_mobile.classList.toggle('hidden')

//     // }
      
//     nav_mobile.classList.toggle('visible')
// })