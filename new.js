$eval
var title = ""
var desc = ""

if ("$messageAfterCommand" !== "") {
  var prize$channelID = (prize$channelID == null) ? null : prize$channelID

  if (prize$channelID !== null) {
    title = "Error!"
    desc = "Another giveaway is already active in this channel. Please choose another channel. ❌"
  
  } else {
    prize$channelID = "$messageAfterCommand"
    var joined$channelID = []
    var users$channelID = []
    var creator$channelID = $ID
    title = "Giveaway! 🎉"
    desc = "A new giveaway has just started! In this giveaway, the prize is:**" + prize$channelID + "**! React with 🎉 to join.\n\nThe giveaway creator can end this giveaway with `gw!end`."
  }

} else {
  title = "Error!"
  desc = "You need to set a prize. ❌"
}
$halt $get(title)
