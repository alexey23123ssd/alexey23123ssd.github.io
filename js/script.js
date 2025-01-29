    window.addEventListener("scroll",()=>{
        document.body.classList.add("dark")
    })
    
    const debounce = (fn, delay) => {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this), delay);
      };
    };
    
    const onScrollEnd = () => document.body.classList.remove("dark");

    window.addEventListener('scroll', debounce(onScrollEnd, 400));

    const burgerBtn = document.querySelector('.burger-icon')
    const crossBtn = document.querySelector(".cross-icon")

    burgerBtn.addEventListener("click",()=>{
       const list = document.querySelector(".header-list")
       list.style.left = "80%"
       burgerBtn.style.display = "none"
    })

    crossBtn.addEventListener("click",()=>{
        const list = document.querySelector(".header-list")
        list.style.left = "120%"
        setTimeout(()=>{burgerBtn.style.display = "block"},500)
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });