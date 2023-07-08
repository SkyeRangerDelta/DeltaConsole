import '../assets/comp_css/TextComps.css'
function Greeting() {
    return <h5 id={"homeGreeting"}>Good {getTime()}</h5>;
}

function getTime(): String {
    const curDate = new Date();
    const hours = curDate.getHours();
    if (hours < 13 ) {
        return 'Morning';
    }
    else if (hours > 12 && hours < 17) {
        return 'Afternoon';
    }
    else {
        return 'Evening';
    }
}

export default Greeting;