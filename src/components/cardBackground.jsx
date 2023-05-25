import '../img/backgroundStarWars.jpg'

const style = {
    CardBackground:{
        background: "black",
        height: "10%",
        widht: "10%"        
    }
}

const Background = () => {

    return (
        <div style = {style.CardBackground}>
            <div >

            </div>
            <img src="../img/backgroundStarWars.jpg" alt="" />
        </div>
    )
}

export default Background