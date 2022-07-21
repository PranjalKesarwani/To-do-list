console.log('This is dummy note taking application');


showNotes();
//Adding a note
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);//Ab tk mai notesObj me sirf addTxt daal rha tha but ab yha addTitle bi daalna pdega
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value= "";
    //   console.log(notesObj);
    showNotes();
});
//Function to show notes in Your notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
      
        html += `
      <div class="noteCard my-2  mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 id= "${index}" class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id= "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div> `
      
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`;
    }
}

//function to delete a note
function deleteNote(index) {
    // console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//Now how to use search bar
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log("Input event fired!", inputVal);
    let noteCards = document.getElementsByClassName('noteCard my-2 mx-2 card');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLocaleLowerCase();
        // console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
let title = document.getElementById('${index}');
title.addEventListener('click', function () {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(textArea.value)
    let noTextArea = document.getElementsByClassName('textArea').length;
    if (noTextArea == 0) {
        let html = index.innerHTML;
        title.innerHTML = `<textarea class="textArea" id="textArea" rows="3">${html}</textarea>`;
    }
    let txtarea = document.getElementById('textArea');
    txtarea.addEventListener('blur', function () {
        localStorage.setItem('title', txtarea.value);
    })
})











// showNotes();
// //Adding a note
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function (e) {
//     let addTxt = document.getElementById("addTxt");
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     notesObj.push(addTxt.value);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addTxt.value = "";
//     //   console.log(notesObj);
//     showNotes();
// });
// //Function to show notes in Your notes
// function showNotes() {
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     let html = "";
//     notesObj.forEach(function (element, index) {
//         html += `
//       <div class="noteCard my-2  mx-2 card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 id= "${index}" class="card-title">Note ${index + 1}</h5>
//           <p class="card-text">${element}</p>
//           <button id= "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//         </div>
//       </div> `

//     });
//     let notesElm = document.getElementById('notes');
//     if (notesObj.length != 0) {
//         notesElm.innerHTML = html;
//     }
//     else {
//         notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`;
//     }
// }

// //function to delete a note
// function deleteNote(index) {
//     // console.log('I am deleting', index);
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     notesObj.splice(index, 1);
//     localStorage.setItem('notes', JSON.stringify(notesObj));
//     showNotes();
// }

// //Now how to use search bar
// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function () {
//     let inputVal = search.value.toLowerCase();
//     // console.log("Input event fired!", inputVal);
//     let noteCards = document.getElementsByClassName('noteCard my-2 mx-2 card');
//     Array.from(noteCards).forEach(function (element) {
//         let cardTxt = element.getElementsByTagName("p")[0].innerText.toLocaleLowerCase();
//         // console.log(cardTxt);
//         if (cardTxt.includes(inputVal)) {
//             element.style.display = "block";
//         }
//         else {
//             element.style.display = "none";
//         }
//     })
// })