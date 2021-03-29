// Write your JavaScript code here.
function init () {
    const takeoff = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton=document.getElementById("right");
    // Put your code for the exercises here.
    takeoff.addEventListener("click",takeOffClick);
    landButton.addEventListener("click",landClick);
    abortButton.addEventListener("click",abortClick);
    upButton.addEventListener("click",upButtonClick);
    downButton.addEventListener("click",downButtonClick);
    leftButton.addEventListener("click",leftButtonClick);
    rightButton.addEventListener("click",rightButtonClick);
}
function takeOffClick()
{
    console.log("hello");

    if(confirm("Are you ready for take-off"))
    {
        
        const fs=document.getElementById("flightStatus");
        fs.innerHTML="Shuttle in flight";
        const flightScreen=document.getElementById("shuttleBackground");
        flightScreen.style.backgroundColor="blue";
        const shuttleHeight=document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML="10,000";
    }
}
function landClick()
{
   
    alert("The shuttle is landing. Landing gear engaged.");
        const fs=document.getElementById("flightStatus");
        fs.innerHTML="The shuttle has landed.";
        const flightScreen=document.getElementById("shuttleBackground");
        flightScreen.style.backgroundColor="green";
        const shuttleHeight=document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML="0";
    
}
function abortClick()
{
    if(confirm("Are you sure you want to abort?"))
    {
        
        const fs=document.getElementById("flightStatus");
        fs.innerHTML="Mission aborted.";
        const flightScreen=document.getElementById("shuttleBackground");
        flightScreen.style.backgroundColor="green";
        const shuttleHeight=document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML="0";
    }
}
function upButtonClick()
{
    
        const imgRocket=document.getElementById("shuttleBackground");
        imgRocket.style.top="-10px";
}
function downButtonClick()
{
    
        const imgRocket=document.getElementById("shuttleBackground");
        imgRocket.style.top="10px";
}
function rightButtonClick()
{
    
        const imgRocket=document.getElementById("shuttleBackground");
        imgRocket.style.left="10px";
}
function leftButtonClick()
{
    
        const imgRocket=document.getElementById("shuttleBackground");
        imgRocket.style.left="-10px";
}
window.addEventListener("load", init);
// Remember to pay attention to page loading!