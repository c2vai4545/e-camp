const cafe = false;
const azucar = true;
const te = true;


if (cafe || te){
    Tomar();
}else{
    noGracias();
}


function Tomar(){
    azucar ? Decision() : noGracias();
}

function Decision(){
    cafe ? SiCafe() : SiTe();
}

function SiCafe(){
    console.log("Me tomo un Cafe!!");
}

function SiTe(){
    console.log("Voy a tomar ese te.");
}

function noGracias(){
    console.log("No, Muchisimas gracias.");
}



const casa = {
    name: "Casa Bonita",
    rooms: 4,
    bathroom: 2,
    calefaccion: true,
};

function valorConsumos(casa){
    casa.rooms >= 4 ? console.log("La luza te sale mas cara.") : console.log("La luz es mas barata");
    casa.bathroom >= 1 ? console.log("el agua es mas cara") : console.log("el agua es mas barata");
    casa.calefaccion ? console.log("Sin calefaccion sera mas frio") : console.log("No hay frio pero pagas mas luz");
}
