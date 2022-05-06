import { React, useState, useEffect } from 'react'
import './App.css'

import { FirstScreen, SecondScreen, ThirdScreen, FourthScreen } from './screens'

import styled from 'styled-components'

import { Button } from './components/Button'

const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

const SwitchButton = styled(Button)`
  margin-left: 10px;
  margin-top: 10px;
`

function App () {
  const [activeScreen, setActiveScreen] = useState(1)

  useEffect(() => {
    setActiveScreen(parseInt(localStorage.getItem('currentScreen')))
  }, [])

  const setActive = (screenId) => {
    setActiveScreen(screenId)
    localStorage.setItem('currentScreen', screenId)
  }

  return (
    <RootContainer>
      <ButtonsContainer>
        <SwitchButton disabled={activeScreen !== 1} onClick={() => setActive(1)}>First</SwitchButton>
        <SwitchButton disabled={activeScreen !== 2} onClick={() => setActive(2)}>Second</SwitchButton>
        <SwitchButton disabled={activeScreen !== 3} onClick={() => setActive(3)}>Third</SwitchButton>
        <SwitchButton disabled={activeScreen !== 4} onClick={() => setActive(4)}>Fourth</SwitchButton>
      </ButtonsContainer>
      {activeScreen === 1 && <FirstScreen />}
      {activeScreen === 2 && <SecondScreen />}
      {activeScreen === 3 && <ThirdScreen />}
      {activeScreen === 4 && <FourthScreen />}
    </RootContainer>
  );
}

export default App;
