window.onload = function(){

  function mufPopUp(el) {
    el = el.target;
  
    if (!el.closest('.header__menu-icon').classList.contains("active")) {
      el.closest(".header__menu-icon").classList.add("active");
      document.querySelector(".menu").classList.add("active");
  }
     else {
        document.querySelector(".menu").classList.remove("active");
        el.closest(".header__menu-icon").classList.remove("active");
      }
    
  
    if (!el.closest(".menu") && !el.closest(".header__menu-icon") &&  document.querySelector(".menu").classList.contains("active")) {
      document.querySelector(".menu").classList.remove("active");
      document.querySelector(".header__menu-icon").classList.remove("active");
    }
  
  }
  document.addEventListener("click", mufPopUp);




  // форма заявки
  let form = document.querySelector(".form__to"),
      inputs = form.querySelectorAll('.input');

  form.addEventListener('submit', function(e) {
    let error = false;
    // console.log(e);
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == '') {
        inputs[i].classList.add('error');
        error = true
      }
      else {
        inputs[i].classList.remove('error');
      }
    }
    if (error) {
      e.preventDefault();
    }
  });

  // маска телефона
  let selector = document.getElementById("form_number");
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);



    // Якорь наверх
    const toper = function () {
      function scrollTo(element) {
        window.scroll({
          left: 0,
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
  
      let button = document.querySelector(".toTop");
      let header = document.querySelector(".anchor");
  
      button.addEventListener("click", () => {
        scrollTo(header);
      });
    };
  
    toper();
  
    window.addEventListener("scroll", function () {
      const topArrow = document.querySelector(".toTop");
  
      if (window.pageYOffset > 1500) {
        topArrow.classList.add("_show");
      } else {
        topArrow.classList.remove("_show");
      }
    });


















}
