import React from "react";
// je pouvais mettre directement un objet dans la fonction a la place de props ({children, color})
const Cars =(props)=>{
  const colorInfos= props.color? (<p>Couleur:{props.color}</p>):(<p>Couleur: Neant</p>);
    return props.children ?(
        <div className="cars">
          <p>Marque:{props.children}</p>
          {colorInfos}
        </div>
    ): <div className="cars"><p>Pas de data!</p></div>
               
}
export default Cars