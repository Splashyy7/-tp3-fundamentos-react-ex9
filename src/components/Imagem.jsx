import React from 'react';

const Imagem = ({ src, alt, link}) => {
  return (
    <div className="imagem-container">
       <a href={link} target="_blank" rel="noopener noreferrer" className="imagem-link">
      <img src={src} alt={alt} style={{ width: '100px', height: 'auto' }} />
    </a>
    </div>
  );
};

export default Imagem;