import styled from 'styled-components';

export const Container = styled.div<{$size: number; $left: number; $top: number, $spritePosition: number}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    background-image: url('/assets/char.png');
    background-position: 0 ${({ $spritePosition }) => $spritePosition}px;
    position: absolute;
    left: ${({ $left }) => $left}px;
    top: ${({ $top }) => $top}px;
`;