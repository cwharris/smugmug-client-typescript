"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Axios = require("axios");
class SmugMugApiClient {
    constructor(apiKey) {
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
    static create(apiKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return new SmugMugApiClient(apiKey);
        });
    }
    getAlbum(albumKey) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield this.client.get(`album/${albumKey}`);
            return response.data;
        });
    }
    findAlbums(text) {
        return __awaiter(this, void 0, void 0, function* () {
            var params = {
                Scope: "",
                SortDirection: "Descending",
                SortMethod: "Rank",
                Text: text
            };
            var response = yield this.client.get(`album!search`, { params: params });
            return response.data;
        });
    }
}
exports.SmugMugApiClient = SmugMugApiClient;
