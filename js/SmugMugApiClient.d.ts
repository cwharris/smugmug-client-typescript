import { ISmugMugApiClient } from "./ISmugMugApiClient";
import { IAlbumResponse } from "./response/IAlbumResponse";
import { IAlbumSearchResponse } from "./response/IAlbumSearchResponse";
export declare class SmugMugApiClient implements ISmugMugApiClient {
    private client;
    constructor(apiKey: string);
    static create(apiKey: string): Promise<ISmugMugApiClient>;
    getAlbum(albumKey: string): Promise<IAlbumResponse>;
    findAlbums(text: string): Promise<IAlbumSearchResponse>;
}
