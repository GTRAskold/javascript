// задание1
// let hah = document.getElementById("jocker")
// hah.innerHTML = "скидыщ"

// задание2

// let hah2 = document.getElementById("arp")
// hah2.setAttribute("class", "arp")

// задание 3

// let hah3 = document.getElementById("bee")
// hah3.style.color = "blue"

// задание 4

// let hah4 = document.getElementById("jocker");
// console.log(hah2)

// задание 5

// let div = document.getElementById('buu')
// let element = document.createElement('li');
// element.className="but"
// element.innerHTML="+"


// задание 6

// function addElement() {
    
// //     var header = document.getElementById("hide");
// //     header.hidden = true
// // }
// // задание 7

// // function chay() {
// //     var header = document.getElementById("pelmen");
// //     header.src = "a-cup-of-tea-with-the-mountain-in-the-background_421632-12082.avif"
// // }

// // задание 9
// // function delcss(){
// //     var css = document.getElementById("but-del")
// //     if(css.getAttribute("class") == "dark"){
// //         css.setAttribute("class","white")
// //     }
// //     else{
// //         css.setAttribute("class","dark")
// //     }
// // }

// // задание 10

// // function replace() {
    
// //     let header1 = document.getElementById("menyaty");
// //     header1.innerHTML = "darth";

// // }

    // задание 11
    
    // function replace() {
    //     let menu = document.getElementById("pokazat")
    //     if (menu.hidden == true){
    //         menu.hidden = false;
    //     }
    //     else{
    //         menu.hidden = true;
    //     }
    // }

    // Задание 12

    // function otobrozit(){ 
    //     let otobrozit = document.getElementById("pole");
    //     let text = document.getElementById("p");
    //     text.innerHTML = otobrozit.value;
    // }

    // задание 13

// let number = 1
// function pokazat(){
//     number++;
//     let pokazat = document.getElementById("knopka")
//     pokazat.innerHTML = number;
// }


// задание 1

// function validateForm(){ 
//     let erorr  = document.getElementById("error-message");
//     let imya  = document.getElementById("name");
//     let pochta = document.getElementById("elmai");
//     let coobchenie = document.getElementById("message");
//     if(imya.value == '' || pochta.value == '' || coobchenie.value == ''){
//         erorr.innerHTML = 'ОШИБКА'
//     }else{
//         erorr.innerHTML = ''
//     }
//     if( pochta.value != '' && pochta.value.includes('@')){
//         erorr.innerHTML = 'ПОЧТА'
//     }else{
//         erorr.innerHTML = ''
//     }
// }

// Задание 2

// function filter(){ 
    
//     let list = document.querySelectorAll('#itemList li')
//         console.log(list)
//     let neznay = document.getElementById('filterInput')
//     list.forEach(item => {
//         if (item.textContent.includes(neznay.value)) {
//             item.style.display = ''
//         }
//         else{
//             item.style.display = 'none'
//         }

//     })
    
// }

// Задание 3

// function toggleTheme() {
//     let hah7 =document.body.getAttribute('class')
//     console.log(hah7)
//     if(hah7 === 'light-theme') {
//         document.body.className = 'dark-theme';
//     }else{document.body.className = 'light-theme'}
// }
// задание 4 
// let array = ['2Q6T96P1gfLWql8oQshHL_PK7QM-960.jpg',
//             'a-cup-of-tea-with-the-mountain-in-the-background_421632-12082.avif',
//             'images (1).jpg',
//             '1697713312_flomaster-top-p-krutie-risunki-poshagovo-vkontakte-5.jpg',
//             'pngtree-blue-bird-is-wearing-sunglasses-image_2583735.jpg']
// let index = 0

// function prevImage(){
//     let galleryImage = document.getElementById("galleryImage");
//     index = index - 1
//     if(index < 0){
//         index = array.length - 1
//     }
//     console.log(index)
//     galleryImage.setAttribute('src', array[index])


// }

// function nextImage(){
//     let galleryImage = document.getElementById("galleryImage");
//     index = index + 1
//     if (index > array.length - 1) {
//         index = 0
//     }
//     console.log(index)
//     galleryImage.setAttribute('src', array[index])
// }

// задание 5
// let galleryImage = document.getElementById('hoverImage')

// function changeImage(){
//     galleryImage.setAttribute('src', '1697713312_flomaster-top-p-krutie-risunki-poshagovo-vkontakte-5.jpg')
// }


// function resetImage(){
//     galleryImage.setAttribute('src', 'a-cup-of-tea-with-the-mountain-in-the-background_421632-12082.avif')
// }