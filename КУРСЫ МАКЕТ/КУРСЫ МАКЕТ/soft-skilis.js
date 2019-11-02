let isBurgerClicked = false;

function burgerClick() {
    if (isBurgerClicked) {
        burger.classList.remove("is-active");
    } else {
        burger.classList.add("is-active");
    }

    isBurgerClicked = !isBurgerClicked;
}

// в этой переменной номер видимого кадра
let currentSlide = 0;

// direction - направление
function doSlide (direction)
 if (currentSlide === 0 && direction < 0) {
     return;}
 