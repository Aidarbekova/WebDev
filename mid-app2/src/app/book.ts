import { pages } from './pages';


export interface Book {
    id: number;
    name: string;
    productList: pages[];
  }
