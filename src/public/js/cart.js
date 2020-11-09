const countProduct = document.querySelector("#countProduct");
var interval = setTimeout(fetchFunction, 1500);
var idProduct;

document.querySelector("#plus").addEventListener("click", (e) => {
    countProduct.innerHTML = Number(Number(countProduct.innerHTML) + 1);
    clearTimeout(interval);
    idProduct = e.target.parentNode.dataset.idProduct;
    interval = setTimeout(fetchFunction, 1500);
});

document.querySelector("#minus").addEventListener("click", (e) => {
    countProduct.innerHTML = Number(Number(countProduct.innerHTML) - 1);
    clearTimeout(interval);
    interval = setTimeout(fetchFunction, 1500);
});

async function fetchFunction() {
    try {
        const amount = Number(countProduct.innerHTML);
        const data = await fetch("http://localhost:4000/user/cart/setAmount", {
            method: "post",
            body: JSON.stringify({ amount, idProduct }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const dataJSON = await data.JSON();
        console.log(dataJSON);
    } catch (e) {}
}
