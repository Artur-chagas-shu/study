
const meters = parseFloat(prompt("Qual o valor em metros que deseja converter em outra unidade de medida ?"));

const userChoose = parseFloat(prompt("Escolha a unidade de medida desejada, seguindo as opçoes as seguir: \n" +
    "1: milímetro (mm)" + " \n" +
    "2: Centímetro (cm)" + "\n" +
    "3: decímetro (dm)" + "\n" +
    "4: decâmetro (dam)" + "\n" +
    "5: hectômetro(hm)" + "\n" +
    "6: quilômetro (km)" + "\n"
))


switch (userChoose) {
    case 1:
        alert("Metros em milimetros = " + meters * 1000 + "MM");
        break;

    case 2:
        alert("Metros em centimetros = " + meters * 100 + "CM");
        break;

    case 3:
        alert("Metros em decimetros = " + meters * 10 + "DM");
        break;

    case 4:
        alert("Metros em decametros = " + meters / 10 + "DAM");
        break;

    case 5:
        alert("Metros em hectometros = " + meters / 100 + "HM");
        break;

    case 6:
        alert("Metros em quilometros = " + meters / 1000 + "KM");
        break;
    default:
        alert("Opção inválida");
}

