import React from 'react';
import { ActiveButtons } from './activeButtons/activeButtons';
import { StartButton } from './startButton/startButton';
import './controlButtons.css';

export function ControlButtons(props) {
    const { handleStart, handleReset, handlePauseResume, isWait, isStart } = props;
    
      return (
        <div className="Control-Buttons" >
          <div className='Control-Buttons'>
              <StartButton 
                handleStart={handleStart}
                isStart={isStart}/>
          </div>
          <div className='Control-Buttons'>
              <ActiveButtons 
                handleReset={handleReset}
                handlePauseResume={handlePauseResume}
                isWait={isWait}
                />
          </div>
        </div>
      );
    }