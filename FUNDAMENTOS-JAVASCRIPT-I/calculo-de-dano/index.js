
let person1 = prompt("Informe o nome do primeiro personagem:");
let atkPower = parseFloat(prompt("Qual o poder de ataque do primeiro personagem?"));

let person2 = prompt("Informe o nome do segundo personagem:");
let lifpoint = parseFloat(prompt("Quantos pontos de vida o segundo personagem possui?"));
let defPower = parseFloat(prompt("Qual o poder de defesa do segundo personagem?"));
let shield = confirm("O segundo personagem possui escudo?");


if (atkPower > defPower && shield == false) {

    let damage = atkPower - defPower;
    let life = lifpoint - damage;

    alert(person1 + " causou " + damage + " de dano em " + person2 + " \n " +
        "O personagem " + person2 + " possui " + lifpoint + " pontos de vida" + "\n" +
        "o personagem " + person1 + " possui " + atkPower + " pontos de ataque" + " \n" +
        "o personagem " + person2 + " possui " + life + " pontos de vida" + "\n" +
        "o personagem " + person2 + " possui " + defPower + " pontos de defesa" + " \n" +
        "o personagem " + person2 + " possui escudo: " + shield
    );
}else if (atkPower > defPower && shield == true) {

    let damage = atkPower - defPower;
    let life = lifpoint - (damage / 2);

    alert(person1 + " causou " + damage/2 + " de dano em " + person2 + " \n " +
        "O personagem " + person2 + " possui " + lifpoint + " pontos de vida" + "\n" +
        "o personagem " + person1 + " possui " + atkPower + " pontos de ataque" + " \n" +
        "o personagem " + person2 + " possui " + life + " pontos de vida" + "\n" +
        "o personagem " + person2 + " possui " + defPower + " pontos de defesa" + " \n" +
        "o personagem " + person2 + " possui escudo: " + shield
    );
} else {
    let damage = 0;
    alert(person1 + " causou " + damage + " de dano em " + person2 + " \n " +
        "O personagem " + person2 + " possui " + lifpoint + " pontos de vida" + "\n" +
        "o personagem " + person1 + " possui " + atkPower + " pontos de ataque" + " \n" +
        "o personagem " + person2 + " possui " + lifpoint + " pontos de vida" + "\n" +
        "o personagem " + person2 + " possui " + defPower + " pontos de defesa" + " \n" +
        "o personagem " + person2 + " possui escudo: " + shield
    );

}
