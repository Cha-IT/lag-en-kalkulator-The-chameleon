
const txtTall1 = document.querySelector("#tall1")
const txtTall2 = document.querySelector("#tall2")
const btnPluss = document.querySelector("#pluss")
const btnMinus = document.querySelector("#minus")
const btngange = document.querySelector("#gange")
const btndele = document.querySelector("#dele")
const svarDiv = document.querySelector("#svar")

btnPluss.onclick = function() {
    let tall1 = Number(txtTall1.value);
    let tall2 = Number(txtTall2.value);
    let sum = tall1 + tall2
    svarDiv.innerHTML = sum
}
btnMinus.onclick = function() {
    let tall1 = Number(txtTall1.value);
    let tall2 = Number(txtTall2.value);
    let sum = tall1 - tall2
    svarDiv.innerHTML = sum
}
btngange.onclick = function() {
    let tall1 = Number(txtTall1.value);
    let tall2 = Number(txtTall2.value);
    let sum = tall1 * tall2
    svarDiv.innerHTML = sum
}
btndele.onclick = function () {
    let tall1 = Number(txtTall1.value);
    let tall2 = Number(txtTall2.value);
    let sum = tall1 / tall2
    svarDiv.innerHTML = sum
}
