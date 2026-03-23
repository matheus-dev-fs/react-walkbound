import styled from 'styled-components';

export const Container = styled.div<{$size: number; $left: number; $top: number }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    background-color: #FF0000;
    position: absolute;
    left: ${({ $left }) => $left}px;
    top: ${({ $top }) => $top}px;
`;