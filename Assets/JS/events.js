
const news = [

    {
        image: "../Assets/Images/Background/TejoNews.jpg",
        title: "SEASON 2: NEW FRONTIER",
        text: "A new season arrives with new characters, weapons, and exciting challenges.",
        description:
        "Season 2 introduces new gameplay changes, exciting rewards, new challenges, and improvements to the overall player experience.",
        link: "#"
    },


    {
        image: "../Assets/Images/Background/DoubleXP.png",
        title: "DOUBLE XP WEEKEND",
        text: "Earn double experience and unlock exclusive rewards this weekend.",
        description:
        "Players can earn double experience points throughout the weekend event. Complete matches, level up faster, and unlock exclusive rewards.",
        link: "#"
    },


    {
        image: "../Assets/Images/Maps/Lotus.jpg",
        title: "NEW MAP REVEALED",
        text: "Explore our newest battlefield with hidden paths and exciting objectives.",
        description:
        "The newest battlefield introduces unique layouts, hidden routes, and new strategic opportunities for players to discover.",
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

function showNews(index){
    document.getElementById("newsImage").src = news[index].image;
    document.getElementById("newsTitle").textContent = news[index].title;
    document.getElementById("newsText").textContent = news[index].text;
    document.getElementById("newsLink").onclick = function(){

        document.getElementById("modalTitle").textContent =
        news[index].title;


        document.getElementById("modalImage").src =
        news[index].image;


        document.getElementById("modalText").textContent =
        news[index].description;

    };

}
showNews(0);