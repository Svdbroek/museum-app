let submitComment =()=>{
    const inputField = document.getElementById('name')
    const name = inputField.value;
    const textField = document.getElementById('msg')
    const msg = textField.value;


    const comment = document.createElement('section') // creates html element <section> </section>
    const h3 = document.createElement('h3') // creates html element <h3> </h3>
    const p = document.createElement('p') // creates html element <p> </p>

    h3.innerHTML = `${name} said:` // adds const: name as plain text between created <h3>name</h3> element
    p.innerHTML = msg               //adds const: msg as plain text between created <p>msg</p> elemnt

    comment.classList.add('comment')  //adds a class to created <section> tag  --> <section class="comment"></...>
    comment.appendChild(h3)  // adds const: h3  (a <h3> tagset with plaintext between) as a child to the the <comment> tag in const: comment
    comment.appendChild(p)   // adds const: p  (a <p> tagset with plaintext between) as a child to the the <p> tag in const: comment
    
    document.getElementById('comments').appendChild(comment) // slaps the fucker into the actual page
    
    //clearing the fields
    inputField.value = null;
    textField.value = null;
}
