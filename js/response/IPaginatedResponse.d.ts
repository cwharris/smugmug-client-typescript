export interface IPaginatedResponse {
    Pages: {
        Count: number;
        RequestedCount: number;
        Start: number;
        Total: number;
        FirstPage: string;
        LastPage: string;
        NextPage: string;
    };
}
