const  togglerHandler = () => {
    document.getElementById('menu-id').classList.toggle('open')
    document.getElementById('menu').classList.toggle('flex')
    document.getElementById('menu').classList.toggle('hidden')
}

document.getElementById('menu-id').addEventListener('click',togglerHandler)

