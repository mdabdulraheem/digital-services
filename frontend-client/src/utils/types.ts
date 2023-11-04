import { QueryFunctionContext } from '@tanstack/react-query';

export type Service = {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: string;
    category: string;
};

export enum FETCH_STATUS {
    LOADING,
    SUCCESS,
    ERROR,
}

export type QueryType = QueryFunctionContext<[string, string | null | undefined]>;
