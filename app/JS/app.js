window.onload = function() {

function mufPopUp(el) {
  el = el.target;
  
  // меню
  let headerIcon = document.querySelector(".header__menu-icon"),
      headerMenu = document.querySelector(".menu");

  if (el.closest('.header__menu-icon') && !el.classList.contains("active")) {
    headerMenu.classList.add("active");
    document.body.style.overflow = "hidden";
    headerIcon.classList.add("active");
  }
  else {
    if(!el.closest(".menu")){
      headerMenu.classList.remove("active");
      document.body.style.overflow = "auto";
      headerIcon.classList.remove("active");
    }else{
      //клик по меню
    }
    //клик не по крестику
  }

  

  // выбор списка
  let btnSelected = document.querySelector('.partnership__selected');

  if (el.closest('.partnership__selected')) {
    document.querySelector('.partnership__selected').classList.toggle('active');
    document.querySelector('.partnership__selected').classList.add('text-white');
    
  }

  if (el.closest('.selected-partnership_item')) {
    document.querySelector('.partnership__selected_text').innerText = el.innerText;
    btnSelected.classList.remove("active");
    }
  
    if (!el.closest('.partnership__selected')) {
      btnSelected.classList.remove("active");
    }

  }

  document.addEventListener("click", mufPopUp);

  // форма заявки
  let form = document.querySelector(".form__to"),
      inputs = form.querySelectorAll('.input');

  form.addEventListener('submit', function(e) {
    let error = false;
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

  // Табы 
  let tabs = document.querySelector('.tabs')
  let btns = tabs.querySelectorAll('.tabs__btn')
  let items = tabs.querySelectorAll('.tabs__item')
  
  function change(arr, i) {
    arr.forEach( item => {
      item.forEach( i => {i.classList.remove('is-active')})
      item[i].classList.add('is-active')
    })
  }
  
  for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      change([btns, items], i)
    })
  }

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


    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      mouseDrag: false,
      autoWidth: true,
    })



  let lines = document.querySelectorAll('.lines'),
      typography = document.querySelector(".typography"),
      bool = true,
      about = document.querySelector(".about-conference"),
      body = document.body,
      topPlusPadding = about.clientHeight+ parseInt(window.getComputedStyle(about, null).getPropertyValue('padding-top')),
      i = 0,
      arrService = new Array();

  lines.forEach((el) => {
    el.classList.add(bool? "right":"left");
    bool = !bool
  })
  
  function mathHeight(scrollTop){
    if(lines[i]){
      let top = lines[i].getBoundingClientRect().top + window.pageYOffset - topPlusPadding;
      console.log(top);
      let count = top - scrollTop;
      if(scrollTop >= top){
        console.log(`Строка ${i}`);
        arrService.push(lines[i]);
        delete lines[i];
        i++;
      };
      
    }
    someFunction(arrService);
  }
  
  function someFunction(arrService){
    arrService.forEach(element => {
      let str = window.getComputedStyle(element),
          matrix = new WebKitCSSMatrix(str.transform);
      if(matrix.m41<800)
        element.style.transform = `translateX(${matrix.m41+10}px)`;
    });
  }

  body.onscroll = ()=>{
    var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    mathHeight(scrollTop);
  };



    
  


  
  // document.querySelectorAll('right').scrollBy({
  //   left: 100, 
  //   behavior: 'smooth' 
  // });

}


