const formular_ex = document.getElementById('formEx')
const mesTache = document.getElementById('mesTache')


formular_ex.addEventListener('submit', (event) => {
    event.preventDefault()

    const newDiv = document.createElement('div')
    newDiv.className ="tache"
    
    if (formular_ex[2].value){
        const img = document.createElement('img')
        img.className ="task-image"
        img.src = formular_ex[2].value
        img.alt = formular_ex[2].value
        newDiv.append(img)
    }

    const corp = document.createElement('div')
    
    const h3 = document.createElement('h3')
    h3.textContent = formular_ex[0].value
    corp.append(h3)
      
    const para = document.createElement('p')
    para.textContent = formular_ex[1].value
    corp.append(para)
    newDiv.append(corp)
  
    
    const span = document.createElement('span')
    switch (formular_ex[3].value) {
        case 'Easy':
            span.className=`para easy`
            break
        case 'Meduim':
            span.className=`para meduim`
            break
        case 'High':
            span.className=`para high`
            break
    }
        
    span.textContent=formular_ex[3].value
    newDiv.append(span)
    mesTache.append(newDiv)

    formular_ex.reset()
})