function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;

}

function createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label;
}

const newTechButton = document.getElementById('newTech');
const form = document.getElementById('devForm');
const developers = [];
let inputRows = 0;


newTechButton.addEventListener('click', function () {
    const stackInputs = document.getElementById('techList');

    const newRow = document.createElement('li');
    let rowIndex = inputRows;
    inputRows++;

    newRow.id = 'row-' + rowIndex;
    newRow.className = 'input-row';

    const techLabel = createLabel('Nome: ', 'techName-' + rowIndex);
    const techInput = createInput('techName-' + rowIndex, '', 'techName');

    const expLabel = createLabel('Experiência: ');
    const id1 = 'exp-' + rowIndex + '-1';
    const expInput1 = createInput(id1, '0-2 anos', 'exp' + rowIndex, 'radio', '0-2 anos');
    const explabel1 = createLabel('0-2 anos', id1);

    const id2 = 'exp-' + rowIndex + '-2';
    const expInput2 = createInput(id2, '3-4 anos', 'exp' + rowIndex, 'radio', '3-4 anos');
    const explabel2 = createLabel('3-4 anos', id2);

    const id3 = 'exp-' + rowIndex + '-3';
    const expInput3 = createInput(id3, '5+ anos', 'exp' + rowIndex, 'radio', '5+ anos');
    const explabel3 = createLabel('5+ anos', id3);

    const removeTechButton = document.createElement('button');
    removeTechButton.type = 'button';
    removeTechButton.innerText = 'Remover';
    removeTechButton.addEventListener('click', function () {
        stackInputs.removeChild(newRow);

    })

    newRow.append(techLabel, techInput, expLabel, expInput1, explabel1, expInput2, explabel2, expInput3, explabel3, removeTechButton);

    stackInputs.appendChild(newRow);

})



form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const fullnameInput = document.getElementById('fullname').value;
    const techList = document.querySelectorAll('.input-row');


    const technologies = [];
    techList.forEach(function (row) {
        const techName = row.querySelector('input[name="techName"]').value
        const techExp = row.querySelector('input[type="radio"]:checked').value

        technologies.push({
            name:techName,
            exp:techExp
        })

    })
    const newDev = {
        fullname : fullnameInput,
        technologies : technologies
    }

    developers.push(newDev);
    alert('Desenvolvedor cadastrado com sucesso!');

    	

        document.getElementById('fullname').value = '';
        techList.forEach(function (row) {
            row.remove();
        })

        console.log(developers);

})


// ## Cadastro de Devs

// Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência.

// - A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
// - Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
//     - um campo de texto para o nome da tecnologia
//     - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
//     - um botão de remover que deve excluir essa linha.
// - O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

// Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.