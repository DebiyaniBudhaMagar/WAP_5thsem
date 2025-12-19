const FormInput = document.getElementById('container_add_note')
const NoteInput = document.getElementById('txt_add_note')
const notes = document.querySelector('.notes')
// cold start problem
let counter = parseInt(localStorage.getItem('counter')) || 0

//WAP to count number of clicks on add note button

for(let j = 1; j <= counter; j++ )
{
    let key = `user${j}`
    let value = localStorage.getItem(key)

    if(value)
    {
        addNoteToDOM(key,value)
        
        const isChecked = localStorage.getItem(`user${j}_checked`) === 'true';
        const container = notes.querySelector(`[data-key="user${j}"]`);
        const checkbox = container.querySelector('.checkbox');
        checkbox.checked = isChecked;
    }
}
FormInput.addEventListener('submit',function(e){
    e.preventDefault();
    ++counter
    localStorage.setItem('counter',counter)

    let key = `user${counter}`
    let value = NoteInput.value
    localStorage.setItem(key,value)

    addNoteToDOM(key,value)
    NoteInput.value = ''
})

notes.addEventListener('click',function(e){
    if(e.target.classList.contains('btn_delete'))
    {
        const container = e.target.parentElement
        let key = container.getAttribute('data-key')
        localStorage.removeItem(key)
        container.remove()
       
    }
    
        console.log("button clicked")
})

notes.addEventListener('change',function(e){
    if(e.target.classList.contains('checkbox'))
    {
         const container = e.target.parentElement
        let key = container.getAttribute('data-key')

        localStorage.setItem(`${key}_checked`, e.target.checked)
    }
        console.log('checkbox clicked')
})

function addNoteToDOM(key, noteName) {
    notes.insertAdjacentHTML('beforeend', `
            <div class="container_new_note" data-key="${key}">
                <input class="checkbox" type="checkbox">  

                <div class="note_name_display">${noteName}</div>

                <button class="btn_delete">Delete</button>
            </div>
    `);
}