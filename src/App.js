import React from 'react';
import './App.css';
import ParentComponent from './componentes/ParentComponent';
import Testif from './componentes/Testif';
import EeventBind from './componentes/EventBind'
import ListKey from './componentes/listKey'
import ControlInput from './componentes/controlInput'
import LifeCicleA from './componentes/LifeCicleA'
import RefDemo from './componentes/RefDemo'
import FocusInput from './componentes/FocusInput'
import FRparentInput from './componentes/FRparentInput'
import ClickCounter from './componentes/ClickCounter'
import HoverCounter from './componentes/HoverCounter'


function App() {
  return (
    <div>
      <ClickCounter name='Enrique'/>
      <HoverCounter />
    </div>
  );
}

export default App;
