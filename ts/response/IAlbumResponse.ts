import { IResponseWrapper } from "./IResponseWrapper";

import { IAlbum } from "../model/IAlbum";

export interface IAlbumResponse extends IResponseWrapper {
    Response: {
        Album: IAlbum;
    }
}
