export interface Data {
  id: number;
  title: string;
  elements: Element[];
}

export interface Element {
  value: string;
  isAvailable: boolean;
}
