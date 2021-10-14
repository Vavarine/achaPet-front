import * as S from './styles';

interface CartPetProps {
  image: string;
  name: string;
  breed: string;
  isLost: boolean;
}

export const CartPet = ({ image, name, breed, isLost }: CartPetProps) => {
  return (
    <S.ContainerCart>
      <S.Image src={image}></S.Image>
      <S.CartInfo>
        <S.Status>{isLost ? 'perdido' : 'visto'}</S.Status>
        <S.Name>{name}</S.Name>
        <S.Breed>({breed})</S.Breed>
      </S.CartInfo>
    </S.ContainerCart>
  );
};
