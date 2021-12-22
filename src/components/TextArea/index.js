import React from 'react';
import { Word } from './TextArea.styles';

function TextArea(props) {
     if(props.correct){
          return <Word color="green" weight='lighter'>{props.text} </Word>
     }
     else if(props.incorrect){
          return <Word color='red' weight='lighter'>{props.text} </Word>
     }
     else if(props.active){
          return <Word color='black' weight='bold'>{props.text} </Word>
     }
     else{
          return <Word color='grey'>{props.text} </Word>
     }
}

export default TextArea;