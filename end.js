$eval
// Add "get(desc)" in "description" field

var title = ""
var desc = ""

try {
  if (creator$channelID == $ID) {
    var genuser = users$channelID[Math.floor(Math.random() * users$channelID.length)]
    title = "Giveaway has ended! 🎉"
    desc = "The winner of**" + prize$channelID + "** is **" + genuser + "**! Congratulations! 🎉"

    delete prize$channelID
    delete joined$channelID
    
  } else {
    title = "Error!"
    desc = "Only the giveaway's creator can end the giveaway. ❌"
  }
  
} catch(e) {
  title = "Error!"
  desc = "There isn't any giveaway to end in this channel. ❌"
}
$halt $get(title)
