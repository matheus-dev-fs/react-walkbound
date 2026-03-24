import type { FC } from 'react';
import * as S from './map.styles';
import { Character } from '../character/character.component';
import type { CharacterType } from '../../types/character.type';

type Props = {
    character: CharacterType;
}

export const Map: FC<Props> = ({ character }) => {
    return (
        <S.Container>
            <Character 
                x={character.x} 
                y={character.y} 
                spritePosition={character.spritePosition}
                name={character.name}
        />
        </S.Container>
    );
}