import { Element } from "../element/element";
import { Role } from "../role/role";

export class Skylander {

    nom : string = "";
    espece : string ="";
    element : Element = Element.Air;
    role : Role = Role.Skylander;
    image : string = "";

    constructor(
        nom : string,
        espece : string,
        element : string,
        role : string,
        image : string
    ){
        this.nom = nom;
        this.espece = espece;
        this.element = this.determinerElement(element);
        this.role = this.determinerRole(role);
        this.image = image;
    }

    determinerElement(element : string) : Element{

        switch ( element ) {
            case "Eau":
                return Element.Eau

            case "Tech":
                return Element.Tech

            case "Terre":
                return Element.Terre

            case "Magie":
                return Element.Magie

            case "Feu":
                return Element.Feu

            case "Mort_Vivant":
                return Element.Mort_Vivant

            case "Vie":
                return Element.Vie

            case "Air":
                return Element.Air

            case "Lumiere":
                return Element.Lumiere

            case "Ténèbre":
                return Element.Ténèbre

            default: 
                return Element.Eau
         }
    }

    determinerRole(role : string) : Role
    {
        switch ( role ) {
            case "Skylander":
                return Role.Skylander

            case "Senseï":
                return Role.Senseï

            case "Maraudeur":
                return Role.Maraudeur

            case "SuperChargers":
                return Role.SuperChargers

            case "Géant":
                return Role.Géant

            case "Swap_Force":
                return Role.Swap_Force

            case "Trap_Masters":
                return Role.Trap_Masters

            case "Mini_Skylanders":
                return Role.Mini_Skylanders

            default: 
                return Role.Skylander
         }
    }
}
