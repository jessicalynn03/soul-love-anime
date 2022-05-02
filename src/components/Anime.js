import animeList from "../animeList";

// function Anime (props){
// return (
//     <div className="container">
    
//         <img src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpeg"/>
    
//     </div>
// )
// }
function Anime () {
    let animeJSX = animeList.map(anime => (
        <ul>
            {anime.cover}
            Title: {anime.name}
        </ul>
    ))
return (
    <>
        
        <ul className="anime-info">
            {animeJSX}
        </ul>
    </>
)
}



export default Anime;


