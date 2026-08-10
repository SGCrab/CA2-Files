
const events = [

    {
        image: "../Assets/Images/Gameplay/VCT.jpg",
        title: "GACHARANT CHAMPIONS TOUR",
        text: "A new season, awaiting new champions of various different tournaments",
        description:
        "Various partnered teams take part in different tournaments, from regionals (kickoff, stage 1 and stage 2), and internationals(masters and champions)",
        link: "#"
    },


    {
        image: "../Assets/Images/Background/steammachinecontroller.jpg",
        title: "GACHARANT X YBOX COLLABORATION",
        text: "In celebration for the launch of GACHARANT, we collaborated with YBOX to make a limited edition specially designed console",
        description:
        "In collaboration with YBOX, players may purchase a specially designed game console based on GACHARANT. Players who purchase it may claim a free gift along with it.",
        link: "#"
    },


    {
        image: "../Assets/Images/Background/SP.jpg",
        title: "GACHARANT POPUP IN SP",
        text: "GACHARANT is coming to SP with many activities",
        description:
        "Players can attend the event and complete activities for prizes. There is alsoo a merch section where players can purchase the exclusive merch from GACHARANT.",
        link: "#"
    },


    {
        image: "../Assets/Images/Gameplay/gameplay4.jpg",
        title: "Road2GACHARANT Event",
        text: "A new progressive event for free rewards",
        description:
        "To celebrate the release of GACHARANT, players can play through this event and accumulate XP to earn free rewards such as cosmetics and in-game currency",
        link: "#"
    },


    {
        image: "../Assets/Images/Background/GCT.jpg",
        title: "Ticket sales open for Masters Singapore",
        text: "Players may now secure their seats for GACHARANT's first tournament",
        description:
        "Masters, one of the tournaments from GACHARANTs tournament schedule, is here! Tickets are now available for players who are interested to attend to purchase. Secure your ticket now while stocks last!",
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