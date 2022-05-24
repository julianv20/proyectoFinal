import React, { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    setCurrentPage(0);
    getGif(category).then(setImages);
  }, [category]);

  const imagesFilter = () => {
    return images.slice(currentPage, currentPage + 12);
  };

  const nextImages = () => {
    if (currentPage + 12 < images.length) {
      setCurrentPage(currentPage + 12);
    }
  };
  const lastImages = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 12);
    }
  };
  return (
    <>
      <button onClick={lastImages} className="btn btn-danger m-4">
        Previous Images
      </button>
      <button onClick={nextImages} className="btn btn-primary">
        Next Images
      </button>
      <div className="contentCards">
        {imagesFilter().map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
      <button onClick={lastImages} className="btn btn-danger m-4">
        Previous Images
      </button>
      <button onClick={nextImages} className="btn btn-primary">
        Next Images
      </button>
    </>
  );
};

// const filtrarPokemons = () => {
//   if (search.length === 0) {
//     return pokemons.slice(currentPage, currentPage + 12);
//   }
//   const filtered = pokemons.filter((poke) => poke.name.includes(search));
//   return filtered.slice(currentPage, currentPage + 12);
// };
// const nextPage = () => {
//   if (
//     pokemons.filter((poke) => poke.name.includes(search)).length >
//     currentPage + 12
//   ) {
//     setCurrenPage(currentPage + 12);
//   }
// };
// const prePage = () => {
//   if (currentPage > 0) {
//     setCurrenPage(currentPage - 12);
//   }
// };

// const { name } = search;
// const handleChange = ({ target }) => {
//   setCurrenPage(0);
//   setSearch(target.value);
// };
