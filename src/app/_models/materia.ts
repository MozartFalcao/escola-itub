import { Professor } from './professor';

export interface Materia {

    id: number;
    nome: string;
    fotoUrl: string;
    professores: [number, string];

}
