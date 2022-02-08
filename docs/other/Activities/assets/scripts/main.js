const activitiesA = ["Durmiendo", "Me levanto - Pereza", "Leo, Tinto y Organizar patio", "Tareas", "Desayuno", "Tareas", "Otras actividades", "Juego o continúo con otras actividades", "Baño - Organizo", "Celular", "Hora de irme"];
const sAtime = [0,700,730,800,830,845,915,1000,1050,1120,1130];
const fAtime = [700,730,800,830,845,915,1000,1050,1120,1130,1140];

const activitiesP1 = ["Me cambio y saco a Leo", "Cena", "Tareas", "Actividad libre", "Durmiendo"];
const sP1time = [1940,2010,2020,2200,2300];
const fP1time = [2010,2020,2200,2300,2359];

const t = fAtime.length-1;

function currentTime() {
    ct = moment().format('h:mm:ss A');
    $('#digitalTime').html(ct);

}

function updateTime() {
    currentTime();
    time();
    activity(ntime);
    setTimeout(updateTime, 1000);
}
updateTime();

function time() {
    var mom = moment();
    hours = mom.hours();
    minutes = mom.minutes();
    stringtime = "" + hours + minutes
    ntime = parseInt(stringtime);
}

function activity(time) {
    if (ntime<=t) {
        for (i = 0; i < activitiesA.length; i++) {
            if (time>=sAtime[i] && time<fAtime[i]) {
                $('#activity').text(activitiesA[i]);
            }
        }
    } else if (ntime>t) {
        for (i = 0; i < activitiesP1.length; i++) {
            if (time>=sP1time[i] && time<fP1time[i]) {
                $('#activity').text(activitiesP1[i]);
            }
        }
    } else {
        $('#activity').text("En el Colegio");
    }
}