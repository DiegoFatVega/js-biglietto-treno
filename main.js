//#preparazione

//creo una variabile per salvare il numero di KM da percorrere
//creo una variabile per salvare l`età del passeggero

//dichiaro una variabile per salvare  il prezzo del biglietto
//creo una variabile per salvare il prezzo al Km (0.21)

//prezzo_standard = prezzo_standard  * 0.8
//prezzo_standard = prezzo_standard  * 0.6
//una variabile per salvare il 20% di sconto
//creo una variabile dove salvare il 20%
//applico lo sconto del 20%


//#elaborazione
//calcolo il prezzo iniziale del biglietto (senza sconti)
//verifico se l`età del passeggero è minore di 18, applico il 20% di sconto
//altrimenti verifico se è maggiore di 65, allora applico
//#OUTPUT

const passenger_age = 10;
const Km = 10 //number(prompt(`type the km you esnt to do in journey`))

const PRICE_PER_KM  = 0.21;
const minor_discount = 0.2;
const senior_discount = 0.0;

ticket_price = km * PRICE_PER_KM
console.log(ticket_price);

if(passenger_age < 18){
    ticket_price = ticket_price * minor_discount;
}
else{
    ticket_price = ticket_price * senior_discount;
}

