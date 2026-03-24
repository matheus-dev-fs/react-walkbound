import { useState } from "react";
import type { CharacterPos } from "../types/character-pos.type";
import type { Direction } from "../types/direction.type";
import type { CharacterType } from "../types/character.type";

export const useCharacter = (): CharacterType => {
    const [pos, setPos] = useState<CharacterPos>({ x: 3, y: 5});
    const [spritePosition, setSpritePosition] = useState<Direction>('down');

    const moveCharacter = (direction: Direction): void => {
        setPos((prev: CharacterPos): CharacterPos => {
            switch (direction) {
                case 'left':
                    setSpritePosition('left');
                    return { ...prev, x: prev.x - 1};
                case 'right':
                    setSpritePosition('right');
                    return { ...prev, x: prev.x + 1};
                case 'up':
                    setSpritePosition('up');
                    return { ...prev, y: prev.y - 1};
                case 'down':
                    setSpritePosition('down');
                    return { ...prev, y: prev.y + 1 };
                default:
                    return prev;
            }
        });
    };

    return {
        x: pos.x,
        y: pos.y,
        moveCharacter,
        spritePosition
    }
};