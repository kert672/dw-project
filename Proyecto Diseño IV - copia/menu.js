// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
    {
      id: 1,
      title: "tipico",
      category: "breakfast",
      price: 8.99,
      img: "./img/breakfast1.jpeg",
      desc: 'huevos, queso, aguacate, tortillas, platano maduro, sausage, orange juice',
    },
    {
      id: 2,
      title: "Eggs & Fruits",
      category: "breakfast",
      price: 10.99,
      img: "./img/breakfast2.jpeg",
      desc: `Huevos revueltos o estrellados, frutas a tu gusto y jugo natural `,
    },
    {
      id: 3,
      title: "Pancake breakfast",
      category: "breakfast",
      price: 15.99,
      img: "./img/breakfast3.jpeg",
      desc: `bacon, huevos, aguacate, 3 pancakes, frutas, jugo de naranja `,
    },
    {
      id: 4,
      title: "Fish & onion rings",
      category: "lunch",
      price: 26.99,
      img: "./img/fish.jpg",
      desc: `Pescado frito y onion rings con siders de tu preferencia `,
    },
    {
      id: 5,
      title: "Tacos",
      category: "lunch",
      price: 15.99,
      img: "./img/tacos.jpg",
      desc: `tacos de pollo, res, al pastor, con guacamole, salsa picante, refresco`,
    },
    {
      id: 6,
      title: "Lobster tail",
      category: "lunch",
      price: 32.99,
      img: "./img/lobster.jpg",
      desc: `lobster tail, salad and siders of your preferance`,
    },
    
    {
      id: 10,
      title: "shrimp & fries",
      category: "dinner",
      price: 19.99,
      img: "./img/dinner1.jpg",
      desc: `fried shrimp and fries or plantains, salad`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");
  
  // load items
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
        </button>`;
      })
      .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }
  