import { Habilidade } from "./habilidade";
import { Localidade } from "./localidade";

export interface Musico {
    //id: number;
    username: string;
    bio?: string;
    imagem?: string;
    localidade?: Localidade;
    habilidades?: Habilidade[];
}