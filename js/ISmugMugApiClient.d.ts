import { IAlbumResponse } from "./response/IAlbumResponse";
import { IAlbumSearchResponse } from "./response/IAlbumSearchResponse";
export interface ISmugMugApiClient {
    getAlbum(albumKey: string): Promise<IAlbumResponse>;
    findAlbums(text: string): Promise<IAlbumSearchResponse>;
}
