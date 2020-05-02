import React from 'react';
import Logo from './Logo';
import Score from './Score';
import ChangeGame from './ChangeGame';


function Header (props){
      return(
            <div className="section first">
                    <Logo/>
                <ChangeGame/>
                <Score score = {props.score}/>
            </div>
        )    
}
export default Header;