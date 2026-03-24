import { useState } from "react";
import type { CharacterPos } from "../types/character-pos.type";
import type { Direction } from "../types/direction.type";
import type { CharacterType } from "../types/character.type";
import { mapSpots } from "../data/map-spots.data";

export const useCharacter = (): CharacterType => {
    const [pos, setPos] = useState<CharacterPos>({ x: 3, y: 5 });
    const [spritePosition, setSpritePosition] = useState<Direction>('down');

    const moveCharacter = (direction: Direction): void => {
        const deltas: Record<Direction, [number, number]> = {
            left: [-1, 0],
            right: [1, 0],
            up: [0, -1],
            down: [0, 1],
        };

        setSpritePosition(direction);

        setPos((prev: CharacterPos): CharacterPos => {
            const [dx, dy]: [number, number] = deltas[direction];
            const newX: number = prev.x + dx;
            const newY: number = prev.y + dy;

            if (!isValidMove(newX, newY)) {
                return prev;
            }

            return { ...prev, x: newX, y: newY };
        });
    };

    const isValidMove = (x: number, y: number): boolean => {
        const isOutOfBounds: boolean = x < 0 || x >= mapSpots[0].length || y < 0 || y >= mapSpots.length;
        if (isOutOfBounds) {
            return false;
        }

        return mapSpots[y][x];
    };

    return {
        x: pos.x,
        y: pos.y,
        moveCharacter,
        spritePosition
    }
};