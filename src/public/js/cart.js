var countProduct = document.querySelector("#countProduct");
var interval = setTimeout(fetchFunction, 250);
var idProduct;
var idItem;

document.querySelectorAll("#plus").forEach((el) =>
    el.addEventListener("click", (e) => {
        changeAmount(e, "+");
    })
);

document.querySelectorAll("#minus").forEach((el) =>
    el.addEventListener("click", (e) => {
        changeAmount(e, "-");
    })
);

function changeAmount(e, op) {
    countProduct = e.target.parentNode.querySelector("#countProduct");
    countProduct.innerHTML =
        op === "+"
            ? Number(Number(countProduct.innerHTML) + 1)
            : Number(Number(countProduct.innerHTML) - 1);
    clearTimeout(interval);
    idProduct = e.target.parentNode.dataset.idProduct;
    idItem = e.target.parentNode.dataset.idItem;
    interval = setTimeout(fetchFunction, 250);
}

async function fetchFunction() {
    try {
        const amount = Number(countProduct.innerHTML);
        const dataFetch = await fetch(
            "http://localhost:4000/user/cart/setAmount",
            {
                method: "post",
                body: JSON.stringify({ amount, idProduct }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => response.json());
        console.log(idItem);
        document.querySelector(
            `#itemcartId${idItem} span`
        ).innerText = `${dataFetch.precio}`;
    } catch (e) {}
}
