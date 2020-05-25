import { Professor } from './professor';

export interface Materia {

    id: number;
    nome: string;
    professores: [number, string];

}