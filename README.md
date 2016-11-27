# SmugMug API Client for TypeScript

## Install
```
npm install --save smugmug
```

## Import
```
import SmugMugApiClient from "smugmmug";
```

### Search Albums
```
const client = await SmugMugApiClient.create("my-api-key");
const response = await client.findAlbums("cats");

for (let album in response.Response.Album) {
  console.log(`${album.AlbumKey}: ${album.Name}`);
}
```
