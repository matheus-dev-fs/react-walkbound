import { useState } from "react";
import type { CharacterPos } from "../types/character-pos.type";
import type { Direction } from "../types/direction.type";

export const useCharacter = () => {
    const [pos, setPos] = useState<CharacterPos>({ x: 3, y: 5 });

    const moveCharacter = (direction: Direction): void => {
        setPos((prev: CharacterPos): CharacterPos => {
            switch (direction) {
                case 'left':
                    return { ...prev, x: prev.x - 1 };
                case 'right':
                    return { ...prev, x: prev.x + 1 };
                case 'up':
                    return { ...prev, y: prev.y - 1 };
                case 'down':
                    return { ...prev, y: prev.y + 1 };
                default:
                    return prev;
            }
        });
    };

    return {
        x: pos.x,
        y: pos.y,
        moveCharacter
    }
};