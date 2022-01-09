import { createDebounceFunction } from "../../../api/api";

export const ActiveButtons = (props) => (
    <div className="active">
      <div className="active-buttons" 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="active-buttons wait" 
           onDoubleClick={createDebounceFunction (props.handlePauseResume, 300)}>
        {props.isWait}
        Wait
      </div>
    </div>
  );