import React from 'react';
import Imagem from './Imagem';

const Galeria = () => {
    const imagens = [
        { src: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', alt: 'Imagem 1', link:"https://www.youtube.com/"},
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png', alt: 'Imagem 2', link:"https://www.facebook.com/?locale=pt_BR" },
        { src: 'https://w7.pngwing.com/pngs/829/574/png-transparent-tiktok-hd-logo-thumbnail.png', alt: 'Imagem 3', link:"https://www.tiktok.com/?utm_id=120209952132980778" }
    ];

    return (
        <div className="galeria">
          {imagens.map((imagem, index) => (
            <Imagem key={index} src={imagem.src} alt={imagem.alt} link={imagem.link} />
          ))}
        </div>
      );
    };
    
    export default Galeria;