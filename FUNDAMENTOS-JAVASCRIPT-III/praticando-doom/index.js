function addContact(){
    const contactSection = document.getElementById('contacts-list');
    
    const h3 = document.createElement('h3');
    h3.innerText = 'Contato';

    const ul = document.createElement('ul');
    
    const nameLi = document.createElement('li');
    nameLi.innerText = 'Nome: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);
    ul.appendChild(document.createElement('br'));


    const phoneLi = document.createElement('li');
    phoneLi.innerText = 'Telefone: ';
    const phoneInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'phone';
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);
    ul.appendChild(document.createElement('br'));

    const addresLi = document.createElement('li')
    addresLi.innerHTML = '<label for = "address">Endereço:</label>';    
    const addresInput = document.createElement('input');
    addresInput.type = 'text';
    addresInput.name = 'address';
    addresInput.id = 'address';
    addresLi.appendChild(addresInput);
    ul.appendChild(addresLi);
    ul.appendChild(document.createElement('br'));

    contactSection.append(h3,ul)


}

function removeContact(){
    const contactSection = document.getElementById('contacts-list');
    
    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');

    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);
    
}