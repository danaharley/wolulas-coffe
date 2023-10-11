const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const navLinks = document.querySelectorAll(".nav__link");
const buttons = document.querySelectorAll(".menu__lists .btn");

const products = {
  data: [
    {
      productName: "Espresso Tonic",
      category: "coffee",
      price: "30.000",
      description:
        "Sebuah minuman yang menyegarkan dengan perpaduan espresso yang kuat dan tonic water berkarbonasi. Rasanya unik, dengan campuran rasa manis dan asam yang menyegarkan.",
      image:
        "https://goodfoodbaddie.com/wp-content/uploads/2021/08/Homemade-Blueberry-Espresso-Tonic-Recipe.jpg",
    },
    {
      productName: "Iced Mocha",
      category: "coffee",
      price: "28.000",
      description:
        "Minuman manis yang terbuat dari campuran espresso, susu cokelat, dan es. Ini memberikan perpaduan sempurna antara rasa kopi dan cokelat yang menyegarkan.",
      image:
        "https://wholefully.com/wp-content/uploads/2021/06/homemade-iced-mocha-coffee.jpg",
    },
    {
      productName: "Cold Brew Coffee",
      category: "coffee",
      price: "35.000",
      description:
        "Kopi yang diseduh dingin selama berjam-jam untuk menghasilkan minuman yang lembut dan rendah asam. Rasanya mendalam dan kafeinnya tinggi.",
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/02/28/iced-coffee-beans-jar-white-pitcherglass-spoon-wood-surface.jpg.rend.hgtvcom.616.462.suffix/1646098022774.jpeg",
    },
    {
      productName: "Oreo Frappe",
      category: "noncoffee",
      price: "25.000",
      description:
        "Dibuat dengan susu, biskuit Oreo yang hancur, gula, dan es batu yang di-blend hingga menjadi minuman yang kaya rasa dan tekstur.",
      image: "https://bakealish.com/wp-content/uploads/2018/04/IMG_0679.jpg",
    },
    {
      productName: "Smooth Banana & Pineapple Frappe",
      category: "noncoffee",
      price: "30.000",
      description:
        "Minuman yang segar dan lezat yang terbuat dari campuran pisang dan nanas yang di-blend dengan es dan bahan lainnya.",
      image:
        "https://cookingformysoul.com/wp-content/uploads/2022/06/pineapple-banana-smoothie-3-min.jpg",
    },
    {
      productName: "Fruit Smoothie Ice Blended",
      category: "iceblended",
      price: "25.000",
      description:
        "Kombinasi buah-buahan segar seperti stroberi, blueberry, dan pisang yang di-blend dengan es dan yogurt, menciptakan minuman sehat dan menyegarkan.",
      image:
        "https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg",
    },
  ],
};

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("header");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

for (const item of products.data) {
  const card = document.createElement("div");
  card.classList.add("card", item.category, "hide");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("card__img");

  const image = document.createElement("img");
  image.setAttribute("src", item.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const productName = document.createElement("h2");
  productName.innerText = item.productName;
  cardContent.appendChild(productName);

  const price = document.createElement("span");
  price.innerText = "Rp. " + item.price;
  cardContent.appendChild(price);

  const description = document.createElement("p");
  description.innerText = item.description;
  cardContent.appendChild(description);

  card.appendChild(cardContent);
  document.getElementById("content").appendChild(card);
}

function filterProduct(value) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });

  const cardElements = document.querySelectorAll("#content .card");
  cardElements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

window.onload = () => {
  filterProduct("all");
};
