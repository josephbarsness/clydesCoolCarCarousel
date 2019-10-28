console.log(' js ');

function buttonClickThing () {
    var d = new Date();
    document.getElementById("imageid").src = "https://source.unsplash.com/344x220/?car" + d.getTime();
    console.log(' done ');
}