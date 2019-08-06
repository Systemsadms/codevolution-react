21) metodos onchange para modificar el state y funcion submit con 
	prevent (ejm controlinput.js)

22) LifeCycle Ciclo de vida de los componentes(praticar con ejemplo para entender)
	Mounting (constructor, static getDerivedStateFromProps, render, componenetDidount)
	Updating (static getDerivedStateFromPropps, shouldComponentUpdate,render, getSnaphotBeforeUpdate, componentDidUpdate)
	Unmonting (componentWillUnmot)
	Error handing (static getDerivedStateFromError, componentDidCatch)


25) Fragment se usa como wrapper en vez
32) Error Bundry. Como controlar y aplicar mensajes de error con condiciones de  div

26)diferencia entre Regular component, Pure Component y Class component
	ejemplo con uso de Didmound con cambio de state cada 2 seg

27) memo component es un component que no se renderiza al para que se usa??

28) 29) 30) Ref se hace referencia a un elemento y se aplican funciones
	documentarse mas funciones

------29) intente hacer el  ejercicio pero genera error InputRef.js FocusINput.js



31) Portal, como renderizar otro root en la pgina principal
	Ejemplo con ventana modal
	https://codesandbox.io/s/00254q4n6p

32) Error Bundry. Como controlar y aplicar mensajes de error con condiciones


33,34,35) Higer Component, como crear componentes dentro de componentes y reusar funciones
		Ejemplo PREVSTATE y con contadores
		33,34) 
		Clickcounter.js
		HoverCounter.js
		WithCounter.js
		35) Ver este video para pasar props desde App e incremar varlores mayor a +1

36,37) Render Propp, pasar funciones a travez de prop 
		Reutilizar Funciones 
		Ejemplo contadores

		ClickCounterTwo.js
		HoverCounterTwo.js
		User.js
		Counter.js
		app.js
		<Counter 
      	render ={(count, incrementCount) => (
      		<ClickCounterTwo count={count} incrementCount={incrementCount}/>
      	)} 
      />
      <Counter 
      	render ={(count, incrementCount) => (
      		<HoverCounterTwo count={count} incrementCount={incrementCount}/>
      	)} 
      />

      Ejercicio No completado por error que no conozco



38,39,40) Contex (Repasar y ejercitar)
			userContext.js
			ComponentC.js
			ComponentE.js
			ComponentF.js
		El ejercicio esta divido en dos partes, pasando el valor y usando el contexto


el universo mecanico
Distancia de la Tierra al Sol en el perihelio: 147 millones de km (0,98 UA)
Distancia entre Venus y la Tierra: 40 millones de km (0,27 UA)
Distancia entre la Tierra y Marte: 58 millones de km (0,39 UA)
Distancia entre Marte y Júpiter: 536 millones de km (3,59 UA)

