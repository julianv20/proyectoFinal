export const getGif = async (category, setImages) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YYfpEsSQt9tuUZkPHvraAxCbghWhiw5e&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ title, id, images }) => ({
    id,
    title,
    url: images?.downsized_medium.url,
  }));
  return gifs;
};
