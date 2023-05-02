// code your solution here
function superbowlWin(result) {
    const win = result.find(superbowl => superbowl.result === "W");
    return win ? win.year : undefined;
}
