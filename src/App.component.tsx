import { useEffect, type FC } from 'react';
import * as S from './App.styles';
import { Map } from './components/map/map.component';
import { useCharacter } from './hooks/useCharatecter.hook';
import type { CharacterType } from './types/character.type';

const App: FC = () => {
    const character: CharacterType = useCharacter();

    useEffect((): void => {
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    const handleKeyDown = (event: KeyboardEvent): void => {
        const keysCode: Record<string, string[]> = {
            left: ['ArrowLeft', 'KeyA'],
            right: ['ArrowRight', 'KeyD'],
            up: ['ArrowUp', 'KeyW'],
            down: ['ArrowDown', 'KeyS']
        };

        if (keysCode.left.includes(event.code)) {
            character.moveCharacter('left');
        } else if (keysCode.right.includes(event.code)) {
            character.moveCharacter('right');
        } else if (keysCode.up.includes(event.code)) {
            character.moveCharacter('up');
        } else if (keysCode.down.includes(event.code)) {
            character.moveCharacter('down');
        }
    };

    return (
        <S.Container>
            <Map character={character} />
        </S.Container>
    );
};

export default App;