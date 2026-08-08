
const events = [

    {
        image: "../Assets/Images/Background/TejoNews.jpg",
        title: "GACHARANT CHAMPIONS TOUR",
        text: "A new season, awaiting new champions of various different tournaments",
        description:
        "Various partnered teams take part in different tournaments, from regionals (kickoff, stage 1 and stage 2), and internationals(masters and champions)",
        link: "#"
    },


    {
        image: "../Assets/Images/Background/DoubleXP.png",
        title: "GACHARANT X YBOX COLLABORATION",
        text: "In celebration for the launch of GACHARANT, we collaborated with YBOX to make a limited edition specially designed console",
        description:
        "In collaboration with YBOX, players may purchase a specially designed game console based on GACHARANT. Players who purchase it may claim a free gift along with it.",
        link: "#"
    },


    {
        image: "../Assets/Images/Maps/Lotus.jpg",
        title: "GACHARANT POPUP IN SP",
        text: "GACHARANT is coming to SP with many activities",
        description:
        "Players can attend the event and complete activities for prizes. There is alsoo a merch section where players can purchase the exclusive merch from GACHARANT.",
        link: "#"
    },


    {
        image: "../Assets/Images/Gameplay/gameplay4.jpg",
        title: "NEW PATCH UPDATE",
        text: "Bug fixes, patches and glitches fixed in the newest snapshot 123T.",
        description:
        "This update focuses on improving game stability, fixing reported bugs, and enhancing the overall gameplay experience.",
        link: "#"
    },


    {
        image: "../Assets/Images/Gameplay/gameplay3.png",
        title: "E-Sport Pro's tips and tricks",
        text: "Learn new skills, brought to you by world no. 1 Gacharant play Penz.",
        description:
        "Professional players share advanced strategies, aiming techniques, and useful tips to help players improve their gameplay.",
        link: "#"
    }

];

function showEvents(index){
    document.getElementById("eventsImage").src = events[index].image;
    document.getElementById("eventsTitle").textContent = events[index].title;
    document.getElementById("eventsText").textContent = events[index].text;
    document.getElementById("eventsLink").onclick = function(){

        document.getElementById("modalTitle").textContent =
        events[index].title;


        document.getElementById("modalImage").src =
        events[index].image;


        document.getElementById("modalText").textContent =
        events[index].description;

    };

}
showEvents(0);