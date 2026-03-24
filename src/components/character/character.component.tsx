import type { FC } from 'react';
import * as S from './character.styles';
import type { CharacterPos } from '../../types/character-pos.type';
import type { Direction } from '../../types/direction.type';

type Props = CharacterPos & {
    spritePosition: Direction;
    name: string;
};

export const Character: FC<Props> = ({ x, y, spritePosition, name }: Props) => {
    const SIZE: number = 30;
    const spriteDirections: Record<Direction, number> = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    };

    return (
        <S.Container
            $size={SIZE}
            $left={x * SIZE}
            $top={y * SIZE}
            $spritePosition={spriteDirections[spritePosition]}
        >
            <S.CharName>{name}</S.CharName>
        </S.Container>
    );
}