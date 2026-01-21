function BattleButton({ buttonUse, buttonText, damage }) {
    function useButton() {
        buttonUse(damage);
    }
    return (
        <button onClick={useButton}>{buttonText}</button>
    )
}

export default BattleButton