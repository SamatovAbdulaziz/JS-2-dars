/* Data types in JS (undefined,boolean,object) */

/*let soz;*/
/*document.write(typeof soz);*/

/*let rost = 45 == 45 ? true : false;*/
/*document.write(rost);*/

/*let arrayObject = [45,78,"text",true,false,"css","javascript",12];*/
/*let oddiyObject = {ism:"Lola", familiya:"Ergasheva", uningYoshi: "16 yoshda"};*/
/*console.log(oddiyObject.ism,oddiyObject.familiya,oddiyObject.uningYoshi);*/

/* Functions in JS */

/*function savatchaniTekshir(){
    if (savatcha.length == 0){
        document.write("Savatchaning ichida "+ savatcha.length +" dona ma'lumot bor!");
    }
    else{
        document.write("Savatchaning ichida "+ savatcha.length +" ta ma'lumot bor!");
    }
}
let savatcha = [78,"matn"];
savatchaniTekshir(savatcha);*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2007);
sana.setMonth();
sana.setDate();

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust",
            "sentyabr","oktyabr","noyabr","dekabr"];
let kunlar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba",
            "juma","shanba"]

document.write("Bugun " + yil + " - yil " + oylar[oy] + " oyining "
              + kun + " - kuni. Haftaning " + kunlar[haftaKuni] + " kuni.");
