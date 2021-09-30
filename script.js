const addBtn = document.getElementById('addBtn');
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener("click", function(){
    navbarLinks.classList.toggle("active");
    console.log("clicked")
});

addBtn.addEventListener('click', () =>{
    addNewNote();    
    console.log("hfdjf");
});

function addNewNote(){

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    
        <div class="toolbar">
            <button class="edit" id="editBtn"><i class="fa fa-edit"></i></i></button>
            <button class="delete"><i class="fa fa-large fa-trash"></i></i></button>
        </div>
            <textarea class = "textarea"></textarea>
            <div class="main hidden"></div>
     
    `;
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector(".delete");
    const textarea = note.querySelector(".textarea");
    const main = note.querySelector(".main");

    editBtn.addEventListener('click', function(){
        textarea.classList.toggle("hidden");
        main.classList.toggle("hidden");
    });

    deleteBtn.addEventListener('click', function(){
        note.remove();
    });
    
    textarea.addEventListener("input", (e) =>{
        const { value } = e.target;
        main.innerHTML = value;
    });

    document.body.appendChild(note);
            
}

