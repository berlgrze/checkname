const btnCheckName = document.getElementById('btnCheckName');
btnCheckName.addEventListener('click', nameCheck);
const result = document.getElementById('result');

function nameCheck() {
    let enteredName = document.getElementById('enteredName').value;
    fetch(`https://api.nationalize.io/?name=${enteredName}`)
        .then(res => res.json())
        .then(data => result.textContent = `${data.name}`)
}