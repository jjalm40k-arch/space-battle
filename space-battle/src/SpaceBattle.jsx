import { useState } from 'react'
import BattleButton from './BattleButton';
import SpaceMessage from './SpaceMessage';
function SpaceBattle() {
    const [battle, setBattle] = useState([100, 100]);
    function fight(damage) {
        setBattle(
            () => battle.map((health) => health - (Math.floor(Math.random() * damage) + 1))
        )
    }
    function restart() {
        setBattle(() => battle.map(() => 100));
    }
    let buttonUse = fight;
    let buttonText = "Fight!";
    if (battle[0] <= 0 || battle[1] <= 0) {
        buttonUse = restart;
        buttonText = "Restart?";
    }
    return (
        <div className="main">
            <h1>Space Battle Simulator</h1>
            <div className="game">
                <h2 className="player">Player Health: {battle[0]}</h2>
                <BattleButton buttonUse={buttonUse} buttonText={buttonText} damage={20} />
                <h2 className="enemy">Enemy Health: {battle[1]}</h2>
            </div>
            <SpaceMessage playerHealth={battle[0]} enemyHealth={battle[1]} />
        </div>
    )
}

export default SpaceBattle