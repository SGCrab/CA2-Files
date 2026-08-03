const news = [
{
    image: "../Assets/Images/Background/TejoNews.jpg",
    title: "SEASON 2: NEW FRONTIER",
    text: "A new season arrives with new characters, weapons, and exciting challenges.",
    link: "#"
},

{
    image: "../Assets/Images/Background/HaloNews.jpg",
    title: "DOUBLE XP WEEKEND",
    text: "Earn double experience and unlock exclusive rewards this weekend.",
    link: "#"
},

{
    image: "../Assets/Images/Background/BackgroundImage.png",
    title: "NEW MAP REVEALED",
    text: "Explore our newest battlefield with hidden paths and exciting objectives.",
    link: "#"
}
];

function showNews(index){

    document.getElementById("newsImage").src = news[index].image;

    document.getElementById("newsTitle").textContent = news[index].title;

    document.getElementById("newsText").textContent = news[index].text;

    document.getElementById("newsLink").href = news[index].link;
}