const form = document.getElementById('orderForm');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const breadType = document.querySelector('select[name="breadType"]').value;
    const main = document.querySelector('input[name="main"]:checked').value;
    const observations = document.querySelector('textarea[name="observations"]').value;
    let salad = ''

    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += ' - ' + item.value + '\n'
    })

    console.log(`Pedido de ${name}, para ${address} \n Tipo de pão: ${breadType} \n Principal: ${main} \n Observações: ${observations} \n Salada: ${salad}`);

})