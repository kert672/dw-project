const menu = [
    {
      id: 1,
      title: "Blue lemonade",
      category: "frozen-drinks",
      price: 8.99,
      img: "./img/bluelemonade.jpg",
      desc: 'El Blue Lemonade ofrece el sabor a clásica y refrescante limonada de limones dulces y agrios, mezclados con un toque de arándanos frescos que te conquistará sin remedio.',
    },
    {
      id: 2,
      title: "Piñacolada",
      category: "frozen-drinks",
      price: 7.99,
      img: "./img/pine.jpg",
      desc: `Este coctel dulce que se prepara a base de ron, crema, 
      leche de coco y jugo de piña, con un triángulo de piña fresca y una cereza maraschino `,
    },
    {
      id: 3,
      title: "Mangorita",
      category: "frozen-drinks",
      price: 12.99,
      img: "./img/mangorita.jpg",
      desc: `Las margaritas de mango con chamoy, es una bebida tipo coctel refrescante 
      elaborada con tequila blanco, es perfecta para esas tardecitas llenas de calor. `,
    },
    {
      id: 4,
      title: "Coconut water",
      category: "natural-drinks",
      price: 4.99,
      img: "./img/water.jpg",
      desc: `Agua de coco resfrescante, recien cortado para obtener mejor sabor`,
    },
    {
      id: 5,
      title: "lemonade",
      category: "natural-drinks",
      price: 6.99,
      img: "./img/lemonade.jpg",
      desc: `Bebida refrescante elaborada con agua natural o mineral, azúcar y jugo de limón.`,
    },
    {
      id: 6,
      title: "Local Beer",
      category: "alcohol",
      price: 5.99,
      img: "./img/salva.jpg",
      desc: `Aroma, cuerpo y carácter son algunas de las particularidades que destacan en la cerveza hecha en Honduras,
       y aunque su sabor es más fuerte que las otras cervezas, tomarla es un deleite.`,
    },
    
    {
      id: 10,
      title: "mojitos",
      category: "alcohol",
      price: 12.99,
      img: "./img/mojitos.jpg",
      desc: `ron, azúcar, jugo de limón, soda y hojas de menta. Por supuesto, Mojitos lleva su clásica bebida homónima al próximo nivel.`,
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
  