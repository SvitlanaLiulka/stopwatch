export const StartButton = (props) => (
    <div className="active-buttons"
         onClick={props.handleStart}>
          {props.isStart === true ? 'Stop' : 'Start'}      
    </div>
);