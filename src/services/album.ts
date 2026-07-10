import { type Albums } from '../types/api_album';

export const getAlbums = async () => {
  const res:Albums = await fetch("https://jsonplaceholder.typicode.com/users/1/albums",
  {
    method: "GET",
    headers: { 
      "Content-Type": "application/json; charset=UTF-8"
    },
    // body: JSON.stringify({
    //   query: {},
    //   option: {
    //     sort: {
    //       albumId: "desc"
    //     },
    //     limit: 12,
    //   }
    // })
  })
  .then(data => data.json())

  return res;
};