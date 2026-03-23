import type { FC } from 'react';
import * as S from './App.styles';
import { Map } from './components/map/map.component';

const App: FC = () => {
    return (
        <S.Container>
            <Map />
        </S.Container>
    );
};

export default App;