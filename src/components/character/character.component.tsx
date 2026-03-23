import type { FC } from 'react';
import * as S from './character.styles';
import type { CharacterPos } from '../../types/character-pos.type';

type Props = CharacterPos;

export const Character: FC<Props> = ({ x, y }: Props) => {
    const SIZE: number = 30;

    return (
        <S.Container
            $size={SIZE}
            $left={x * SIZE}
            $top={y * SIZE}
        >
            
        </S.Container>
    );
}