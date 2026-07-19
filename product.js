const products = [
    {
        id: 2,
        name: "U.S Polo Shoes",
        price: 3499,
        image: "/US POLO FLIP.png",
        type: "Premium Streetwear",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "sneakers"
    },
    {
        id: 1,
        name: "Nike Shoes",
        price: 2999,
        image: "/NIKE COURT LEGACY.png",
        type: "Everyday Comfort",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "sneakers"
    },
    {
        id: 3,
        name: "Reebok Shoes",
        price: 1499,
        image: "/REEBOK COURTSWIFT.png",
        type: "Casual Streetwear",
        rating: "&starf; &starf; &starf; &star; &star; &emsp; 3/5",
        category: "sneakers"
    },
    {
        id: 4,
        name: "Campus Shoes",
        price: 1999,
        image: "/CAMPUS CLINT.png",
        type: "Everyday Comfort",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "sneakers"
    },
    {
        id: 5,
        name: "Overlays Hoodie",
        price: 2999,
        image: "/Overlays Hoodie.png",
        type: "Everyday Comfort",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "Hoodies"
    },
    {
        id: 6,
        name: "Pepe Loose fit",
        price: 1499,
        image: "/PEPE loose fit.png",
        type: "Casual Streetwear",
        rating: "&starf; &starf; &starf; &star; &star; &emsp; 3/5",
        category: "Pants"
    },
    {
        id: 7,
        name: "U.S Polo Tee",
        price: 1999,
        image: "/US polo Cotton.png",
        type: "Everyday Comfort",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "Tees"
    },
    {
        id: 8,
        name: "Zara Track Pant",
        price: 1499,
        image: "/Zara.png",
        type: "Everyday Comfort",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "Pants"
    },
    {
        id: 9,
        name: "Puma RS-X",
        price: 4499,
        image: "/PUMA RSX.png",
        type: "Retro Runner",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "sneakers"
    },
    {
        id: 10,
        name: "Adidas Ultraboost",
        price: 7999,
        image: "/ADIDAS ULTRABOOST.png",
        type: "Running Performance",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "sneakers"
    },
    {
        id: 11,
        name: "Levi's 511 Jeans",
        price: 2499,
        image: "/LEVIS 511.png",
        type: "Slim Fit Denim",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "pants"
    },
    {
        id: 12,
        name: "H&M Oversized Tee",
        price: 999,
        image: "/HM OVERSIZED.png",
        type: "Relaxed Streetwear",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "tees"
    },
    {
        id: 13,
        name: "Zara Cargo Pants",
        price: 2799,
        image: "/ZARA CARGO.png",
        type: "Utility Style",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "pants"
    },
    {
        id: 14,
        name: "Nike Sports Hoodie",
        price: 3499,
        image: "/NIKE HOODIE.png",
        type: "Athletic Comfort",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "hoodies"
    },
    {
        id: 15,
        name: "Under Armour Hoodie",
        price: 3999,
        image: "/UA HOODIE.png",
        type: "Winter Essential",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "hoodies"
    },
    {
        id: 16,
        name: "Casio Vintage Watch",
        price: 1999,
        image: "/CASIO WATCH.png",
        type: "Classic Digital",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "accessories"
    },
    {
        id: 17,
        name: "Fossil Grant Watch",
        price: 6999,
        image: "/FOSSIL WATCH.png",
        type: "Premium Leather",
        rating: "&starf; &starf; &starf; &starf; &star; &emsp; 4/5",
        category: "accessories"
    },
    {
        id: 18,
        name: "New Balance 550",
        price: 5999,
        image: "/NB 550.png",
        type: "Court Inspired",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "sneakers"
    },
    {
        id: 19,
        name: "YNDC Asphalt Elite",
        price: 5999,
        image: "/jacket.png",
        type: "Court Inspired",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "jackets"
    },
    {
        id: 20,
        name: "H&M Regular Fit",
        price: 1999,
        image: "Page/NB 550.png",
        type: "Court Inspired",
        rating: "&starf; &starf; &starf; &starf; &starf; &emsp; 5/5",
        category: "sneakers"
    }
];


// const supabaseUrl = "https://rukwfgrqpynqepvjqnku.supabase.co";

// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1a3dmZ3JxcHlucWVwdmpxbmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NjMxNzQsImV4cCI6MjA5NzQzOTE3NH0.mlkpJ3enl6CehCM13-F87Ga7Dkcj7xD9fXHbhQdzzNE";

// const supabaseClient = supabase.createClient(
//     supabaseUrl,
//     supabaseKey
// );

document.addEventListener("DOMContentLoaded",()=>{
    body.style.opacity = 0

    setTimeout(() => {
        body.style.opacity =1 
    }, 200);
})


// async function getProducts() {

//     const { data, error } = await supabaseClient
//         .from("products")
//         .select("*");

//     console.log("DATA:", data);
//     console.log("ERROR:", error);

//     if (error) {
//         console.error(error);
//         return;
//     }

//     products = data;

//     num.innerText = `( ${products.length} products )`;

//     renderCards(products);

// }


const cartcont = document.body.querySelector(".cartbottom")

const notification = document.querySelector(".notification")

let notificationTimer;

function shownoti() {

    notification.style.opacity = "1";

    notification.style.bottom = '20px';

    clearTimeout(notificationTimer);

    notificationTimer = setTimeout(() => {

        notification.style.bottom = '10px';
        notification.style.opacity = "0";

    }, 2000);

}

let cart = [];

const cartvalue = document.querySelector(".cart-num")
const num = document.querySelector(".num")

if (cart.length === 0) {
    cartvalue.innerText = 0
}

let lastnumber;

function updateCount() {

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    cartvalue.innerText = totalItems;
}
function renderCards(products) {

    const cont = document.body.querySelector(".main")

    cont.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div")


        card.classList.add("item")

        card.innerHTML = `<div class="plus">Add</div>
        <div class="img-box"><img src="${product.image}" alt="" class="slimg"></div>
        <div class="content">
        <div class="price">${"₹" + product.price}</div>
        <div class="name">${product.name}</div>
        <div class="type">${product.type}</div>
        <div class="rating">
    ${product.rating}
</div>`

        const addbtn = card.querySelector(".plus")

        addbtn.addEventListener("click", () => {

            const existingItem = cart.find(
                item => item.id === product.id
            )



            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }

            if (existingItem && existingItem.quantity > 1) {
                console.log(existingItem.quantity)
                console.log(cart)
            }


            updateCount();

            console.log(cart)

            shownoti()

            CartRender(cart);


        })


        cont.appendChild(card)

    })
}

const searchInput = document.querySelector(".search");

const head = document.querySelector(".head")

const btn = document.querySelector(".sicon")

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const fliteredProducts = products.filter(product => {

        return product.name.toLowerCase().includes(searchText) ||
            product.type.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

    })


    if (fliteredProducts.length === 0) {
        head.innerText = "No results of your search"
    } else {
        head.innerText = "Results of your search"
    }

    num.innerText = "( " + fliteredProducts.length + " products )"

    renderCards(fliteredProducts)

});


const FilterBtns = document.querySelectorAll(".list")

FilterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const text = btn.textContent.toLowerCase()

        if (text === "all") {

            num.innerText = "( " + products.length + " products )"
            renderCards(products)

        } else {

            const ButtonFilteredProducts = products.filter(product => {

                return product.category.toLowerCase().includes(text);

            })

            num.innerText = "( " + ButtonFilteredProducts.length + " products )"

            renderCards(ButtonFilteredProducts)
        }


    });

})




// Cart rendering function 

const pay = document.querySelector(".paybtn")

function subtotal() {

    let total = 0

    cart.forEach(addedone => {
        total += addedone.price * addedone.quantity;
    })

    pay.innerText = "Checkout " + "( ₹" + total + " )"

}



function CartRender() {

    cartcont.innerHTML = "";

    cart.forEach(product => {

        const card = document.createElement("div")


        card.classList.add("item", lastnumber)

        card.innerHTML = `
        <div class="crossbutton">&#10005;</div>
        <div class="plus">${product.quantity}</div>
        <div class="img-box"><img src="${product.image}" alt="" class="slimg"></div>
        <div class="content">
        <div class="price">${"₹" + product.price}</div>
        <div class="name">${product.name}</div>
        <div class="type">${product.type}</div>
        <div class="rating">${product.rating}</div>`

        cartcont.appendChild(card)

        // lastnumber = cart.length

        //     if (lastnumber === cart.length) {
        //         card.style.marginBottom = "100px";
        //     } else if(lastnumber < cart.length) {
        //         card.classList.remove(lastnumber)
        //     }

        const del = card.querySelector(".crossbutton")

        del.addEventListener("click", () => {

            card.style.opacity = 0;

            setTimeout(() => {

                cart = cart.filter(
                    item => item.id !== product.id
                );

                CartRender();

            }, 300);

        });



    })



    subtotal()

}

function updateCart() {
    CartRender();
    updateCount();

}



const cartbtn = document.querySelector(".cart")

const cartbody = document.querySelector(".Cart-body")

cartbtn.addEventListener("click", () => {

    let lastnumber = cart.length

    cartbody.classList.add("active")

    if (cart.length > 0) {
        pay.classList.add("activebtn")
    }




})

function getStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {
            stars += "&starf;";
        } else {
            stars += "&star;";
        }

    }

    return stars;
}

const cartclose = document.querySelector(".closebtn")

cartclose.addEventListener("click", () => {

    cartbody.classList.remove("active")

})

document.addEventListener("DOMContentLoaded", () => {

    num.innerText = `( ${products.length} products )`;

    renderCards(products);

});

document.querySelector(".arrow").addEventListener("click",()=>{
    window.location.href = "index.html"
})