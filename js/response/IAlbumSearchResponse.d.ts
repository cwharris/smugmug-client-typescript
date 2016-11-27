import { IResponseWrapper } from "./IResponseWrapper";
import { IPaginatedResponse } from "./IPaginatedResponse";
import { IAlbum } from "../model/IAlbum";
export interface IAlbumSearchResponse extends IResponseWrapper {
    Response: IPaginatedResponse & {
        Album: Array<IAlbum>;
    };
}
