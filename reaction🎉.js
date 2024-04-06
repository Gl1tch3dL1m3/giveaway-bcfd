$eval
// Add "$get(desc)" into "description" field

var title = ""
var desc = ""

try {
  var joinedindex = joined$channelID.indexOf($ID)

  if (joinedindex == -1) {
    joined$channelID.push($ID)
    users$channelID.push("$namePlain")
    title = "You have joined the giveaway! 🎉"
    desc = "You have successfully joined the giveaway. If you want to leave, react with 🎉 again."

  } else {
    joined$channelID.splice(joinedindex, 1)
    users$channelID.splice(joinedindex, 1)
    title = "You have left the giveaway! ❌"
    desc = "You have successfully left the giveaway. If you want to join again, react with 🎉 again."
  }
  
} catch(e) {
  // Leave this blank...
  title = e
}
$halt $get(title)
