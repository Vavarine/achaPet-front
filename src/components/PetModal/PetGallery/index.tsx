import { sendError } from 'next/dist/next-server/server/api-utils';
import { useState } from 'react';

import { Foto } from '../../../types';
import * as S from './styles';

interface PetGalleryProps {
  images: Foto[];
  description: string;
}

export const PetGallery = ({ images, description }: PetGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Foto>(images[0]);

  return (
    <S.Images>
      <div className="selectedImageContainer">
        {selectedImage ? (
          <img src={selectedImage.url} alt={description} />
        ) : (
          <img src="/assets/petLogo.png" className="placeholder" />
        )}
      </div>

      <div className="imagesToSelectContainer">
        {images.map(image => {
          const isSelected = image.idFoto === selectedImage.idFoto;

          return (
            <img
              key={image.idFoto}
              className={`imageToSelect ${isSelected && 'selected'}`}
              src={image.url}
              onClick={() => {
                setSelectedImage(image);
              }}
            />
          );
        })}
      </div>
    </S.Images>
  );
};
