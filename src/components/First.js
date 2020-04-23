import React from 'react';
import Logo from './Logo';
import Score from './Score';
import ChangeGame from './ChangeGame';


class First extends React.Component{
    render(){
        return(
            <div className="section first">
                    <Logo/>
                <ChangeGame/>
                <Score/>
            </div>
        )
    }
}
export default First;