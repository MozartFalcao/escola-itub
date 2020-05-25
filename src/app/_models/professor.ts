import { Materia } from './materia';

export interface Professor {

    id: number;
    nome: string;
    email: string;
    contato: string;
    fotoUrl: string;
    materia?: Materia[];

}
