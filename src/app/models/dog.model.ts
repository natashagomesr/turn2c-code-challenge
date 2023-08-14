export interface Breed {
  id: Number;
  name: 'string';
  life_span: 'life_span';
}

export interface Dog {
  url: 'string';
  breeds: Breed[];
}
