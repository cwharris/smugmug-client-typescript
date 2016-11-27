import * as Axios from "axios";

import { ISmugMugApiClient } from "./ISmugMugApiClient";
import { IAlbumResponse } from "./response/IAlbumResponse";
import { IAlbumSearchResponse } from "./response/IAlbumSearchResponse";

export class SmugMugApiClient implements ISmugMugApiClient {

    private client: Axios.AxiosInstance; 

    constructor(apiKey: string) {
        this.client = Axios.create({
            baseURL: "https://api.smugmug.com/api/v2",
            headers: {
                "Content-Type": 'application/json'
            },
            params: {
                "_accept": "application/json",
                "APIKey": apiKey
            }
        });
    }

    static async create(apiKey: string): Promise<ISmugMugApiClient> {
        return new SmugMugApiClient(apiKey);
    }

    async getAlbum(albumKey: string): Promise<IAlbumResponse> {
        var response = await this.client.get<IAlbumResponse>(`album/${albumKey}`);
        return response.data;
    }

    async findAlbums(text: string): Promise<IAlbumSearchResponse> {
        var params = {
            Scope: "",
            SortDirection: "Descending",
            SortMethod: "Rank",
            Text: text
        };
        var response = await this.client.get<IAlbumSearchResponse>(`album!search`, {params: params});
        return response.data;
    }
}
