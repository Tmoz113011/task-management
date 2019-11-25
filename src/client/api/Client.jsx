import { HttpClient } from "./httpClient";

const isProduction = process.env.NODE_ENV !== 'production';
const baseUrl = isProduction ? 'product_path' : 'dev_path';

export const httpClient = new HttpClient(baseUrl);
