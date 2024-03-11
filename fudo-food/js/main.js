let menu__list = document.getElementById("menu__list");
function toggleMenu() {
  if (menu__list.className == "menu__list") {
    menu__list.className = "show-menu";
    console.log(menu__list);
  } else {
    console.log(menu__list);

    menu__list.className = "menu__list";
  }
}

function checkHome() {
  let name = document.getElementById("name");
  let name__error = document.getElementById("name__error");
  if (name.value == "") {
    name.className = "form-error";
    name__error.innerHTML = "Please enter your name";
    name__error.style.color = "red";
    return false;
  } else if (isNaN(name.value)) {
    name.className = "form-error";
    name__error.innerHTML = "Please enter the name of the letter character";
    name__error.style.color = "red";
    return false;
  } else {
    name.className = "form-success";
    name__error.innerHTML = "Success";
    name__error.style.color = "green";
  }

  let email = document.getElementById("emailAddress");
  let email__error = document.getElementById("email__error");
  let email__format = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value == "") {
    email.className = "form-error";
    email__error.innerHTML = "Please enter your email";
    email__error.style.color = "red";
    return false;
  } else if (!email__format.test(email.value)) {
    email.className = "form-error";
    email__error.innerHTML = "Please fill in the correct format of the email";
    email__error.style.color = "red";
    return false;
  } else {
    email.className = "form-success";
    email__error.innerHTML = "Success";
    email__error.style.color = "green";
  }

  let subject = document.getElementById("subject");
  let subject__error = document.getElementById("subject__error");
  if (subject.value == "") {
    subject.className = "form-error";
    subject__error.innerHTML = "Please enter subject";
    subject__error.style.color = "red";
    return false;
  } else {
    subject.className = "form-success";
    subject__error.innerHTML = "Success";
    subject__error.style.color = "green";
  }

  let enquiry__type = document.getElementById("enquiry__type");
  let enquiry__error = document.getElementById("enquiry__error");
  if (enquiry__type.value == "") {
    enquiry__type.className = "form-error";
    enquiry__error.innerHTML = "Please enter enquiry type";
    enquiry__error.style.color = "red";
    return false;
  } else {
    enquiry__type.className = "form-success";
    enquiry__error.innerHTML = "Success";
    enquiry__error.style.color = "green";
  }
  return true;
}

function checkSignIn() {
  let email = document.getElementById("email");
  let email__error = document.getElementById("email__error");
  let email__format = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value == "") {
    email.className = "form-control--error";
    email__error.innerHTML = "Please enter your email";
    email__error.style.color = "red";
  } else if (!email__format.test(email.value)) {
    email.className = "form-control--error";
    email__error.innerHTML = "Please fill in the correct format of the email";
    email__error.style.color = "red";
  } else {
    email.className = "form-control--success";
    email__error.innerHTML = "Success";
    email__error.style.color = "green";
  }

  let password = document.getElementById("password");
  let password__error = document.getElementById("password__error");
  if (password.value == "") {
    password.className = "form-control--error";
    password__error.innerHTML = "Please enter your password";
    password__error.style.color = "red";
  } else if (password.value.length < 6) {
    password.className = "form-control--error";
    password__error.innerHTML =
      "Please enter a password of 6 characters or more";
    password__error.style.color = "red";
  } else {
    password.className = "form-control--success";
    password__error.innerHTML = "Success";
    password__error.style.color = "green";
  }
  return false;
}

function checkSignUp() {
  let email = document.getElementById("email");
  let email__error = document.getElementById("email__error");
  let email__format = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value == "") {
    email.className = "form-control--error";
    email__error.innerHTML = "Please enter your email";
    email__error.style.color = "red";
  } else if (!email__format.test(email.value)) {
    email.className = "form-control--error";
    email__error.innerHTML = "Please fill in the correct format of the email";
    email__error.style.color = "red";
  } else {
    email.className = "form-control--success";
    email__error.innerHTML = "Success";
    email__error.style.color = "green";
  }

  let fullname = document.getElementById("fullname");
  let fullname__error = document.getElementById("fullname__error");
  if (fullname.value == "") {
    fullname.className = "form-control--error";
    fullname__error.innerHTML = "Please enter your fullname";
    fullname__error.style.color = "red";
  } else {
    fullname.className = "form-control--success";
    fullname__error.innerHTML = "Success";
    fullname__error.style.color = "green";
  }

  let password = document.getElementById("password");
  let password__error = document.getElementById("password__error");
  if (password.value == "") {
    password.className = "form-control--error";
    password__error.innerHTML = "Please enter your password";
    password__error.style.color = "red";
  } else if (password.value.length < 6) {
    password.className = "form-control--error";
    password__error.innerHTML =
      "Please enter a password of 6 characters or more";
    password__error.style.color = "red";
  } else {
    password.className = "form-control--success";
    password__error.innerHTML = "Success";
    password__error.style.color = "green";
  }

  let repass = document.getElementById("repass");
  let repass__error = document.getElementById("repass__error");
  if (repass.value == "") {
    repass.className = "form-control--error";
    repass__error.innerHTML = "Please re-enter the password you just set";
    repass__error.style.color = "red";
  } else if (repass.value != password.value) {
    repass__error.innerHTML =
      "Please re-enter the same password as the password above";
    repass__error.style.color = "red";
  } else {
    repass.className = "form-control--success";
    repass__error.innerHTML = "Success";
    repass__error.style.color = "green";
  }
  return false;
}

const relatedProducts = [
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise ",
    price: 50,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk3.png",
    category: 4,
  },
  {
    id: 5,
    name: "The Creamiest Creamy Chicken",
    price: 60,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk4.png",
    category: 5,
  },
  {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 15,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk5.png",
    category: 6,
  },
];

const ListProduct = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    price: 30,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk6.png",
    category: 1,
  },
  {
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    price: 10,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk1.png",
    category: 1,
  },
  {
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    price: 20,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk2.png",
    category: 3,
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise ",
    price: 50,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk3.png",
    category: 4,
  },
  {
    id: 5,
    name: "The Creamiest Creamy Chicken",
    price: 60,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk4.png",
    category: 5,
  },
  {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 15,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./img/disk5.png",
    category: 6,
  },
];

const ListCategory = [
  {
    id: 1,
    name: "breakfast",
    image: "./img/category2.png",
  },
  {
    id: 2,
    name: "vegan",
    image: "./img/category1.png",
  },
  {
    id: 3,
    name: "meat",
    image: "./img/category3.png",
  },
  {
    id: 4,
    name: "dessert",
    image: "./img/category4.png",
  },
  {
    id: 5,
    name: "lunch",
    image: "./img/category5.png",
  },
  {
    id: 6,
    name: "chocolate",
    image: "./img/category6.png",
  },
];

const Blog = [
  {
    id: 1,
    title: "Japanese 'Super shocked' Fried Chicken - Chicken Karaage",
    image: "./img/blog1.jpg",
    content: `It's cold outside, and the weekend is coming, so we
  especially recommend this super crispy fried chicken to you
  ;)`,
    blogCateId: 1,
  },
  {
    id: 2,
    title: "How To Make Fish Spring rolls",
    image: "./img/blog2.jpg",
    content: `“Refreshing Tet dishes – Let Spring be more DELICIOUS!” What
    will you do if you receive this offer? :)`,
    blogCateId: 2,
  },
  {
    id: 3,
    title: "How To Make Bordelaise Sauce",
    image: "./img/blog3.jpg",
    content: `Wine sauce was one of my "closets" when I was studying in
    Europe whenever I had guests at home or needed to cook
    something to contribute to shared meals with friends and
    colleagues`,
    blogCateId: 3,
  },
  {
    id: 4,
    title: "Eggnog Chocolate (Hot) Chocolate Eggnog",
    image: "./img/blog4.jpg",
    content: `Tomorrow is Christmas, the whole family definitely do not
    miss this wonderful Eggnog. Do not be afraid of the weather
    because this is a drink that is extremely delicious whether
    hot or cold.`,
    blogCateId: 4,
  },
  {
    id: 5,
    title: "How To Make SUPER Super Simple Thick Cake",
    image: "./img/blog5.jpg",
    content: `Who would go to make banh day at home, is it fast to go out
    and buy it? But this heavy-loving donkey likes to tinker at
    home. If I knew how to make banh day this easy, the cake
    vendor near my house would have "lost" me a long time ago`,
    blogCateId: 5,
  },
  {
    id: 6,
    title: `What Does It Have In Our Kitchen ? Apple Cider Vinegar -
    Pharmacy From The Kitchen`,
    image: "./img/blog6.jpg",
    content: ` Hello everyone, Last year I started the series "What's in my
    kitchen?" to introduce some of the utensils that I really
    like in the kitchen, which I have experienced in using for a
    long time, and know are very good, ...`,
    blogCateId: 6,
  },
];

const BlogCategory = [
  {
    id: 1,
    name: "Cooking method",
  },
  {
    id: 2,
    name: "Origins",
  },
  {
    id: 3,
    name: "Tet holiday",
  },
  {
    id: 4,
    name: "Genre",
  },
  {
    id: 5,
    name: "Cooking experience",
  },
  {
    id: 6,
    name: "Table of contents of cakes",
  },
];

function showProduct(data) {
  let food__list = document.querySelector(".food__list");
  if (food__list) {
    food__list.innerHTML = "";
    for (let item of data) {
      food__list.innerHTML += `<div class="food__item">

      <!-- Gán id vào cuối chuỗi URL của mỗi sản phẩm tương ứng trong mảng ListProduct  -->
      <a href="./detail.html?id=${item.id}">
          <img src="${item.image}" alt="" class="food__image" />
        </a>

        <div class="food__content">
          <h4 class="food__title--small">
            <a href="#">${item.name}</a>
          </h4>
          <div class="food__guide">
            <img src="./img/Timer.png" alt="" />
            <span>30 Minutes</span>
            <img src="./img/ForkKnife.png" alt="" />
            <span>Snack</span>
          </div>
        </div>
      </div>`;
    }
  }
}

function showCategory(data) {
  let category__list = document.querySelector(".category__list");
  if (category__list) {
    category__list.innerHTML = "";
    for (let item of data) {
      category__list.innerHTML += `<div class="category__item">
      <a href="#">
        <img src="${item.image}" alt="" class="category__image" />
      </a>
      <span class="category__food">
        <a href="#">${item.name}</a>
      </span>
    </div>`;
    }
  }
}

showProduct(ListProduct);
showCategory(ListCategory);

const food__select = document.querySelector("#food__select");
function filterProduct() {
  // filter(): là phương thức tạo ra một mảng mới chứa đầy các phần tử vượt qua bài test do một hàm tạo nên
  //          phương thức filter không thưc thi hàm cho các phần tử trống, không thay đổi mảng ban đầu
  // array.filter(function(currentValue, index, arr), thisValue{
  // return anArray
  // })

  const under30 = ListProduct.filter(function (item) {
    return item.price < 30;
  });
  const over30_50 = ListProduct.filter(function (item) {
    return item.price >= 30 && item.price <= 50;
  });
  const over50 = ListProduct.filter(function (item) {
    return item.price > 50;
  });

  if (food__select.value == "under30") {
    showProduct(under30);
  }
  if (food__select.value == "over30-over50") {
    showProduct(over30_50);
  }
  if (food__select.value == "over50") {
    showProduct(over50);
  }
  if (food__select.value == "all") {
    showProduct(ListProduct);
  }
}

if (food__select) {
  food__select.addEventListener("change", filterProduct);
}

function detailProduct() {
  // Hàm tạo URLSearchParams () tạo và trả về một đối tượng URLSearchParams mới.
  // window.location.search: thuộc tính tìm kiếm trả về phần chuỗi truy vấn URL, bao gồm cả dấu hỏi chấm
  // Phương thức get() của giao diện URLSearchParams trả về giá trị đầu tiên được liên kết với tham số tìm kiếm đã cho.
  const foodId = new URLSearchParams(window.location.search).get("id");
  // console.log(foodId);

  // Phương thức find() trả về giá trị của phần tử đầu tiên vượt qua bài test(function), thực thi một hàm cho mỗi phần tử mảng, và trả về undefined khi không tìm thấy giá trị nào, không thực thi cho các phần tử trống
  // array.find(function(currentValue, index, arr), thisValue)
  // funtion(): 1 hàm dùng để chạy cho mỗi phần tử trong mảng
  // currentValue: Giá trị của phần tử hiện tại; index: vị trí của phần tử hiện tại
  // arr: mảng của phần tử hiện tại
  // return value: Giá trị của phần tử đầu tiên vượt qua bài kiểm tra.
  const food = ListProduct.find(function (item) {
    return item.id == foodId;
  });
  // console.log(food);

  const foodDiv = document.querySelector(".food");
  if (foodDiv) {
    foodDiv.innerHTML = `
    <div class="food__content">
    <h1 class="food__title">
      <a href="#">${food.name}</a>
    </h1>
    <span class="food__price">${food.price}$</span>
    <p class="food__desc">
      ${food.desc}
    </p>
    <form action="" class="food__input">
      <input type="text" placeholder="Quantity" required />
      <button>Add To Cart</button>
    </form>
  </div>
  <img src="${food.image}" alt="" class="food__image" />
    `;
  }
}

// filter vs find:
// filter: trả về tất cả phần tử có giá trị vượt qua bài test và tạo ra 1 mảng mới gồm những phần tử có giá trị đó
// find: trả về 1 và chỉ một giá trị đầu tiên có giá trị vượt qua bài test

detailProduct();

function detailListProducts(data) {
  let productsList = document.querySelector(".product__list");
  if (productsList) {
    productsList.innerHTML = "";
    for (let item of data) {
      productsList.innerHTML += `<div class="product__item">
        <a href="./detail.html?id=${item.id}">
          <img src="${item.image}" alt="" class="product__image" />
        </a>
        <div class="product__content">
          <h4 class="product__title--small">
            <a href="./detail.html?id=${item.id}"> ${item.name} </a>
          </h4>
          <span class="product__price">${item.price}$</span>
        </div>
        <button class="product__button">Add To Cart</button>
      </div>`;
    }
  }
  console.log(productsList);
}

detailListProducts(relatedProducts);

function typeList() {
  let type__list = document.querySelector(".type__list");
  if (type__list) {
    for (let item of ListCategory) {
      type__list.innerHTML += `<li class="type__item">
                <!-- ?typeId={item.id}: gán cho mỗi product một id tương ứng trong mảng ListCategory
                                        gán sự kiện onclick và truyền vào tham số id
                                        event.preventDefault(): để cho trang web không bị reload lại
                -->
            <a href="./products.html?typeId=${item.id}" onclick="typeListRender(${item.id});event.preventDefault()">${item.name}</a>
            </li>
            `;
    }
  }
}

typeList();

function listProducts(data) {
  let products__list = document.querySelector(".products__list");
  if (products__list) {
    products__list.innerHTML = "";
    for (let item of data) {
      products__list.innerHTML += `<div class="products__item">
      <a href="./detail.html?id=${item.id}">
      <img src="${item.image}" alt="" class="products__image" />
      </a>
      <div class="products__content">
        <h3 class="products__title">
          <a href="./detail.html?id=${item.id}">${item.name}</a>
        </h3>
        <span class="products__price">${item.price}$</span>
        </div>
        <button class="products__button">Add To Cart</button>
    </div>`;
    }
  }
}

listProducts(ListProduct);

function typeListRender(typeListId) {
  // let typeId = new URLSearchParams(window.location.search).get("typeId");
  let filterTypeList = ListProduct.filter(function (item) {
    // Tạo ra một mảng mới chứa những phần tử có category trong mảng ListProduct = / trùng với typeListId(truyền vào)
    return item.category == typeListId;
  });
  // sử dụng lại hàm listProducts() để hiện thị lại mảng mới vừa khởi tạo
  listProducts(filterTypeList);
}

function postCategoryList() {
  let postCateList = document.querySelector(".post-category__list");
  if (postCateList) {
    for (let item of BlogCategory)
      postCateList.innerHTML += `<li class="post-category__item">
    <a href="#?postCateId=${item.id}" onclick="blogListRender(${item.id});event.preventDefault()" class="post-category__text">
      ${item.name}</a
    >
  </li>`;
  }
}

postCategoryList();

function listPost(data) {
  let postList = document.querySelector(".post__list");
  if (postList) {
    postList.innerHTML = "";
    for (let item of data) {
      postList.innerHTML += `<div class="post__item">
      <a href="#?id=${item.id}" class="post__image-link">
        <img
          src="${item.image}"
          alt=""
          class="post__image--small"
        />
      </a>
      <div class="post__content">
        <h3 class="post__title">
          <a href="#?id=${item.id}">
            ${item.title}
          </a>
        </h3>
        <p class="post__desc">
          ${item.content}
        </p>
      </div>
    </div>`;
    }
  }
}

listPost(Blog);

function blogListRender(blogListId) {
  let filterBlogList = Blog.filter(function (item) {
    return item.blogCateId == blogListId;
  });
  listPost(filterBlogList);
}
