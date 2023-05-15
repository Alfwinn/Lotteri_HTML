

const antal_vinster = document.getElementById("antal_vinster")
const svaretdiv = document.getElementById("svar_div")

const vinster = ["Birks Soppa", "Axels Tånagel", "Toyota Corolla", "Mazda 323 1.5i", "Gräs", "Magnesuim", "Cater Vagn", "koala", "Oskars Bönbollar", "Alex Motorcykel"]


function buttonClick(e) {

let vinst = `<h3>Dina vinster</h3>` 

    let antalv = parseInt(antal_vinster.value);

    console.log(`knappen fungerar ${antalv}`)


    if (antalv < 4 && antalv > 0) {
        

        for (i = 0; i < antalv; i++) {
            let slumptal = Math.floor(Math.random() * 10)
            let t_vinst = vinster[slumptal];

            vinst += `<p>${t_vinst} </p>` 
        }

        svaretdiv.innerHTML = vinst;

    }
    else {

        alert("Fel mängd lotter >:( ")
    }


}