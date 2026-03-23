import type { FC } from 'react';
import * as S from './map.styles';
import { Character } from '../character/character.component';

export const Map: FC = () => {

    return (
        <S.Container>
            <Character x={5} y={0} />
        </S.Container>
    );
}