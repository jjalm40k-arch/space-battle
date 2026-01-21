function SpaceMessage({ playerHealth, enemyHealth }) {
    let message = "Engage the enemy!";
    if (playerHealth <= 0 && enemyHealth <= 0) {
        message = "It's a draw! Both spacecraft have been nuetralized";
    }
    else if (playerHealth <= 0) {
        message = "Mission failed! You'll get 'em next time!"
    }
    else if (enemyHealth <= 0) {
        message = "You win! The enemy craft is a hunk of junk!"
    }
    return (
        <h2 className="message">{message}</h2>
    )
}

export default SpaceMessage