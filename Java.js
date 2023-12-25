const uz = document.querySelector('.uz_btn'),
      ru = document.querySelector('.ru_btn'),
      eng = document.querySelector('.eng_btn'),
      box = document.querySelector('.box'),
      text = document.querySelector('.text');

 //async 
    function Uz() {
    // try {
    //     let UzName = await fetch('http://localhost:8070/api/v1/article-type/list-paging')
    //     let UzNameJson = await UzName.json()
    //     let UzNameContent = UzNameJson.content
    //     UzNameContent.forEach(info => {
    //         let h1 = document.createElement('h1')
    //         h1.classList.add('h1_text_1') 
    //         h1.innerHTML = `${info.nameUz}`
    //         box.append(h1)
    //     });
        
        text.innerHTML = "Uzbek"

    // } catch (error) {
    //     console.error(error);
    // }
 }

 //async  
    function Ru() {
    // try {
    //     let RuName = await fetch('http://localhost:8070/api/v1/article-type/list-paging')
    //     let RuNameJson = await RuName.json()
    //     let RuNameContent = RuNameJson.content
    //     RuNameContent.forEach(info => {
    //         let h1 = document.createElement('h1')
    //         h1.classList.add('h1_text_1') 
    //         h1.innerHTML = `${info.nameRU}`
    //         box.append(h1)
    //     });
            text.innerHTML = "Russia"
        

    // } catch (error) {
    //     console.error(error);
    // }

 }

//  async 
    function Eng() {
//     try {
//         let EngName = await fetch('http://localhost:8070/api/v1/article-type/list-paging')
//         let EngNameJson = await EngName.json()
//         let EngNameContent = EngNameJson.content
//         EngNameContent.forEach(info => {
//             let h1 = document.createElement('h1')
//             h1.classList.add('h1_text_1') 
//             h1.innerHTML = `${info.nameEng}`
//             box.append(h1)
//         });
       
           text.innerHTML = "English"

//     } catch (error) {
//         console.error(error);
//     }
 }
 Uz()
 uz.addEventListener('click', ()=> {
    uz.classList.remove('active')
    ru.classList.add('active')
    eng.classList.remove('active')
    if (uz.innerHTML == 'Uz') {
        Uz()
     } else Ru()
 })

 ru.addEventListener('click', ()=> {
    uz.classList.remove('active')
    ru.classList.remove('active')
    eng.classList.add('active')
    if (ru.innerHTML == 'Ru') {
        Ru()
     } else Eng()
 })
 
 eng.addEventListener('click', ()=> {
    uz.classList.add('active')
    ru.classList.remove('active')
    eng.classList.remove('active')
    if (eng.innerHTML == 'Eng') {
        Eng()
     } else Uz()
 })
 
