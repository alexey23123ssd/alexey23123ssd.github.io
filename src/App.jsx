import './styles/normalize.css'
import './App.scss'
import Header from "./components/Header.jsx";
import Appeal from "./components/Appeal.jsx";
import Map from "./components/Map.jsx";
import Mission from "./components/Mission.jsx";
import Business from "./components/Business.jsx";
import Benefits from "./components/Benefits.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
    const headerItems = ['Облачные решения','Кибербезопасность','Импортозамещение','Цифровая трансформация']
    const citiesArr = [ { name: 'Москва', region: 'Москва', x: 180, y: 485 }, { name: 'Санкт-Петербург', region: 'Северо-Запад', x: 192, y: 288 }, { name: 'Калининград', region: 'Северо-Запад', x: 60, y: 280 },
        { name: 'Ярославль', region: 'Центр', x: 230, y: 425 }, { name: 'Н. Новгород', region: 'Волга', x: 235, y: 545 }, { name: 'Воронеж', region: 'Центр', x: 125, y: 520 }, { name: 'Белгород', region: 'Центр', x: 120, y: 570 }, { name: 'Ростов-на-Дону', region: 'Юг', x: 105, y: 665 },
        { name: 'Краснодар', region: 'Юг', x: 70, y: 790 }, { name: 'Волгоград', region: 'Юг', x: 150, y: 752 }, { name: 'Самара', region: 'Волга', x: 230, y: 650}, { name: 'Казань', region: 'Волга', x: 325, y: 630 }, { name: 'Уфа', region: 'Волга', x: 330, y: 700 }, { name: 'Оренбург', region: 'Волга', x: 282, y: 755 }, { name: 'Екатеринбург', region: 'Урал', x: 410, y: 685 },
        { name: 'Пермь', region: 'Урал', x: 485, y: 620 }, { name: 'Челябинск', region: 'Урал', x: 413, y: 758 }, { name: 'Сургут', region: 'Урал', x: 540, y: 635 }, { name: 'Тюмень', region: 'Урал', x: 520, y: 750 }, { name: 'Ижевск', region: 'Урал', x: 425, y: 606 }, { name: 'Омск', region: 'Сибирь', x: 585, y: 975 }, { name: 'Новосибирск', region: 'Сибирь', x: 645, y: 935 },
        { name: 'Томск', region: 'Сибирь', x: 720, y: 940 }, { name: 'Красноярск', region: 'Сибирь', x: 780, y: 940 }, { name: 'Иркутск', region: 'Сибирь', x: 870, y: 1000 }, { name: 'Хабаровск', region: 'Дальний восток', x: 1245, y: 1020 },
        { name: 'Владивосток', region: 'Дальний восток', x: 1230, y: 1170 } ];
    const regionsArr = ['Все','Москва','Центр','Северо-Запад','Юг','Волга','Урал','Сибирь','Дальний восток']
    const businessesArr = [
        {
            img:"src/img/IMG 2.png",
            desc:"Решения Softline",
            content:"ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности."
        },
        {
            img:"src/img/IMG 4 1.png",
            desc:"Кибербезопасность",
            content:"Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации."
        },
        {
            img:"src/img/IMG3.png",
            desc:"Импортозамещение",
            content: "ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства."
        },
        {
            img:"src/img/origin-mode_615x260_2 1.png",
            desc:"Облачные решения",
            content:"Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация."
        },
        {
            img:"src/img/origin-mode_615x260_ итог 4.png",
            desc:"Цифровая трансформмация и разработка ПО",
            content: "Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия."
        },
        {
            img:"src/img/IMG 1 1.png",
            desc:"Техническая поддержка Softline",
            content: "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями."
        }
    ]
    const benefitsArr = [
        {
            img:"src/img/benefits/first.svg",
            desc:"ДМС"
        },
        {
            img:"src/img/benefits/second.svg",
            desc:"Выходной в день рождения"
        },
        {
            img:"src/img/benefits/third.svg",
            desc:"Корпоративная мобильная связь"
        },
        {
            img:"src/img/benefits/fourth.svg",
            desc:"Корпоративные скидки на спорт"
        },
        {
            img:"src/img/benefits/fifth.svg",
            desc:"LTI"
        }
    ]
    const benefistsArr = [
        {
            img:"src/img/benefits/sixth.svg",
            desc:"Оргтехники"
        },
        {
            img:"src/img/benefits/first.svg",
            desc:"ДМС"
        },
        {
            img:"src/img/benefits/seventh.svg",
            desc:"Ипотеки"
        }
    ]
    const galleryArr = ["src/img/Слайд2.png","src/img/Слайд1.png","src/img/Слайд3.png","src/img/Слайд4.png","src/img/Слайд5.png"]

  return (
    <div className="wrapper">
      <Header headerItemsArr={headerItems} />
      <Appeal />
      <Map cities={citiesArr} regions={regionsArr} />
      <Mission />
      <Business businesses={businessesArr} />
      <Benefits benefitsArr={benefitsArr} benefistsArr={benefistsArr} />
      <Gallery galleryArr={galleryArr} />
    </div>
  )
}

export default App
