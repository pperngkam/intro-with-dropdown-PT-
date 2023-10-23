const home = document.querySelector('.home')

home.addEventListener('click', e=>{
    document.querySelector('.mobile-nav').classList.add('show')
    document.querySelector('.overlay').style.display = 'block'
    document.querySelector('body').classList.add('.lock')
}) 
document.querySelector('#close-Menu').addEventListener('click', e=>{
    document.querySelector('.mobile-nav').classList.remove('show')
    document.querySelector('.overlay').style.display = 'none'
    document.querySelector('body').classList.remove('.lock')
})