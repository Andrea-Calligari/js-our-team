// Utilizzando i dati forniti i tabella,
// 1-creare un array di oggetti per rappresentare i membri del team.
// 2-Ogni membro è caratterizzato dalle seguenti informazioni:
// nome
// ruolo
// foto.
// MILESTONE 0:
// 3-Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// 4-Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// 5-Stampare le stesse informazioni su DOM semplicemente come stringhe






const barnett = {
    nome: 'Wayne Barnett' ,
    ruolo: 'Founder & CEO' ,
    foto: './img/wayne-barnett-founder-ceo.jpg'
}
const caroll = {
    nome: 'Angela Caroll' ,
    ruolo: 'Chief-Editor',
    foto: './img/angela-caroll-chief-editor.jpg'
}
const estrada = {
    nome: 'Scott Estrada' ,
    ruolo: 'Developer' ,
    foto: './img/scott-estrada-developer.jpg'
}
const gordon = {
    nome: 'Walter Gordon' ,
    ruolo: 'Office-Manager' ,
    foto: './img/walter-gordon-office-manager.jpg'
}
const lopez = {
    nome: 'Angela Lopez' ,
    ruolo: 'Social-Media-Manager' ,
    foto: './img/angela-lopez-social-media-manager.jpg'
}
const ramos = {
    nome: 'Barbara Ramos' ,
    ruolo: 'Graphic-Designer' ,
    foto: './img/barbara-ramos-graphic-designer.jpg'
}
const team = [barnett, caroll, estrada, gordon, lopez, ramos];
for(let i = 0; i < team.length; i++){
    const membro = team[i]
    // console.log(membro)
}
const srcImg = [
    './img/angela-caroll-chief-editor.jpg',
    './img/scott-estrada-developer.jpg',
    './img/walter-gordon-office-manager.jpg',
    './img/angela-lopez-social-media-manager.jpg',
    './img/barbara-ramos-graphic-designer.jpg',
    './img/wayne-barnett-founder-ceo.jpg'
]


//  console.log(cardHeaderDOMEl)

const rowElem = document.querySelector('.row');
// console.log(colsHeaderDOMEl)

for( let j = 0; j < team.length; j++){
    let membro = team[j]

    rowElem.innerHTML += `
    <div class="col-4 mb-4">    
        <div class="card border-0 text-center">
            <div class="card-header">
                <img src="${membro.foto}" alt="">
            </div>
            <div class="card-body d-flex flex-column ">
            <div class="font-weight-bold" >
                ${membro.nome}
            </div>
            <div class="font-italic">
                ${membro.ruolo}
            </div>


            </div>
        </div>
    </div>
    `;
    
    /*
    for( let i = 0; i < colsHeaderDOMEl.length; i++){
        singlecol = colsHeaderDOMEl[i]


        singlecol.innerHTML = cardheaderHTML
    }
    */
    
    
}

