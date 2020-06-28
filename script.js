const toggle = document.gelElementById('toggle')
const close = document.gelElementById('close')
const open = document.gelElementById('open')
const modal = document.gelElementById('modal')

// Toggle Navigation
toggle.addEventLIstener('click', ()=>
document.body.classList.toggle('show-nav'));

// Show modal
open.addEventLIstener('click', ()=> modal.classList.add('show-modal'));

// Hide modal
close.addEventLIstener('click', ()=>modal.classList.remove('show-modal'));






