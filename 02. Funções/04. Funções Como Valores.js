var lauchMissiles = function (value) {
    missileSystem.launch(`now`)
}

if (safeMode)
    launchMissiles = function (value) { /* do nothing */}