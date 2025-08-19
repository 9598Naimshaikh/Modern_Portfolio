const notesContainer = document.getElementById("notesContainer");
const noteModal = document.getElementById("noteModal");
const noteTitle = document.getElementById("noteTitle");
const noteDescription = document.getElementById("noteDescription");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function openModal() {
    noteModal.classList.remove("hidden");
    noteModal.classList.add("flex");
}

function closeModal() {
    noteModal.classList.add("hidden");
}

function displayNotes() {
    // Remove broken/empty notes
    notes = notes.filter(note => note.title && note.description);
    localStorage.setItem("notes", JSON.stringify(notes));

    // Reset container with "Add note" card
    notesContainer.innerHTML = `
                <div onclick="openModal()" 
                    class="cursor-pointer flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-400 rounded-lg bg-white shadow-lg hover:scale-110 transform transition">
                    <div class="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-full text-2xl font-bold">+</div>
                    <p class="mt-2 text-gray-500">Add new note</p>
                </div>
            `;

    // Render saved notes
    notes.forEach((note, index) => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg hover:scale-110 shadow-lg hover:scale-110 transform transition p-4 flex flex-col justify-between relative";
        card.innerHTML = `
                    <button onclick="deleteNote(${index})" class="absolute top-4 right-4 text-red-500 hover:text-red-700 text-sm">❌</button>
                    <div>
                        <h3 class="font-bold text-lg mr-5">${note.title}</h3>
                        <p class="text-gray-600 mt-1">${note.description}</p>
                    </div>
                    <div class="flex justify-between items-center mt-4 text-sm text-gray-500">
                        <span>${note.date}</span>
                    </div>
                `;
        notesContainer.appendChild(card);
    });
}

function addNote() {
    const title = noteTitle.value.trim();
    const description = noteDescription.value.trim();
    if (!title || !description) return;

    const date = new Date().toLocaleDateString();
    notes.push({ title, description, date });
    localStorage.setItem("notes", JSON.stringify(notes));

    noteTitle.value = "";
    noteDescription.value = "";
    closeModal();
    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();