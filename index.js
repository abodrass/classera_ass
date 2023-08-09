let dark=document.getElementById("background");
let main=document.getElementById("main");
let card=document.getElementsByClassName("asid_card-text");
let logoname=document.getElementById("logo_name");
let asid_img=document.getElementsByClassName("asid_card-img")
let hedear_img=document.getElementsByClassName("header_imgs")
console.log(card);
console.log(logoname);
let asid_black_img =[];

let hedear_black_img=[];




for(let i=0;i<card.length;i++){
    asid_black_img[i]=asid_img[i].src;
}

for (let i=0;i<hedear_img.length;i++){
    hedear_black_img[i]=hedear_img[i].src;
}



let asid_white_img=[".\\images\\icons8-home-24.png",".\\images\\icons8-tickets-80.png","images\\icons8-user-30 (1).png","images\\icons8-organization-100.png","images\\icons8-bar-chart-50.png", "images\\icons8-settings-48 (1).png","images\\icons8-chat-64.png","images\\icons8-moon-50.png"];

let header_white_imgs=["images\\icons8-search-50 (1).png","images\\icons8-mail-50 (1).png","images\\icons8-notification-50 (1).png","images\\icons8-search-50 (1).png"]
dark.addEventListener("click",
() => {
if(dark.checked==1){
    logoname.style.color="white";
    main.style.backgroundColor="#262626";
    for(let i=0 ;i<card.length;i++){
        card[i].style.color="white";
        asid_img[i].src=asid_white_img[i];
    }
    for (let i=0;i<hedear_img.length;i++){
        hedear_img[i].src=header_white_imgs[i];
    }

}

else{
main.style.backgroundColor="white";
logoname.style.color="black";
for(let i=0 ;i<card.length;i++){
    card[i].style.color="black";
    asid_img[i].src=asid_black_img[i];

}

for (let i=0;i<hedear_img.length;i++){
    hedear_img[i].src=hedear_black_img[i];
}

}
},)
