$eval
// Add "get(desc)" into "description" field

var title = ""
var desc = ""

try {
  if (joined$channelID) {
    delete joined$channelID
    delete prize$channelID
    delete users$channelID
    delete creator$channelID

    title = "Giveaway has been cancelled! 🎉"
    desc = "The giveaway has been cancelled by $name who has administrative permissions. 🚫"
  }
  
} catch(e) {
  // Leave this blank...
}
$halt $get(title)
