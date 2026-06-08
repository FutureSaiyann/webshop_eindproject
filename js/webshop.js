

// const producten = [
//     {
//         naam: "High Performance Gaming PC",
//         prijs: "1299.00",
//         afbeelding: "./afbeelding/8700_4_03.jpg",
//         description: "Latest components with RTX 4070, Intel i7"
//     }
 
// ];

async function renderHomeProducten() {
    const grid = document.querySelector("#product-grid");
    if (!grid) return;
    let producten = await runQuery("SELECT Afbeelding, Naam as naam FROM producten");
    grid.innerHTML = "";
    producten.forEach(product => {
        const html = `
            <div class="product-card">
                <img src="${product.Afbeelding}" alt="${product.Afbeelding}">
                <h3>${product.naam}</h3>
                <p class="price">€${product.prijs}</p>
                <p class="description">${product.description}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        grid.innerHTML += html;
    });
}

// document.addEventListener("DOMContentLoaded", () => {
//     renderHomeProducten();
// });
    renderHomeProducten();
 