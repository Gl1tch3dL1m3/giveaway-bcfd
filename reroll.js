$eval
var msg = ""

try {
  var joined = null

  if (creator$channelID == $ID) {
    try {
      joined = (joined$channelID == null) ? true : false
    } catch(e) {joined = true}

    if (joined) {
      var gen = users$channelID[Math.floor(Math.random() * users$channelID.length)]
      var msg = (gen == null) ? "nobody" : gen
      msg = "A new winner is: **" + msg + "**! 🎉"

    } else {
    msg = "Error! You can't reroll a giveaway which isn't ended. ❌"
    }

  } else {
    msg = "Error! Only the giveaway's creator can reroll the giveaway. ❌"
  }
  
} catch(e) {
  msg = "Error! There is no giveaway to reroll. ❌"
}
$halt $get(msg)
