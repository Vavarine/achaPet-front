export interface InstitutionalContent {
  slug: string;
  title: string;
  text: string;
}

export interface User {
  name: string;
  email: string;
}
export interface Pet {
  id: number;
  email: string;
  nome: string;
  celular: string;
  status: 'perdido' | 'visto';
  nomeAnimal: string;
  animalTipo: null;
  raca: string;
  cor: string;
  caracteristicas: string;
  hora: string;
  data: string;
  latitude: string;
  longitude: string;
  imagens: string[];
}
