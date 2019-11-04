console.log(' js ');

function buttonClickThing(elem) {
    var d = new Date();

    elem.closest('.carsButton').querySelector('img').src =
        "https://source.unsplash.com/344x220/?cars" + d.getTime()

    console.log(' done ');
};


