import type { CharacterPos } from "./character-pos.type";
import type { Direction } from "./direction.type";

export type CharacterType = CharacterPos &{
    moveCharacter: (direction: Direction) => void;
}