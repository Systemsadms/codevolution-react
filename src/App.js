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
import ClickCounterTwo from './componentes/ClickCounterTwo'
import HoverCounterTwo from './componentes/HoverCounterTwo'
import User from './componentes/User'
import Counter from './componentes/Counter'

import { UserProvider } from './componentes/UserContext'
import ComponentF from './componentes/ComponentF'
import ComponentC from './componentes/ComponentC'


function App() {
  return (
    <div>
    	<UserProvider value="Enrique">
    		<ComponentC />
    	</UserProvider>
      
    </div>
  );
}

export default App;
