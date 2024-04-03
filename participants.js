$eval
// Add "get(desc)" in "description" field

var title = ""
var desc = ""

try {
  var list = "```"
  if (users$channelID.length != 0) {
    for (let i = 0 ; i < users$channelID.length ; i++) {list += "\n@" + users$channelID[i]}

  } else {list += "nobody"}

  list += "```"

  title = "Participants of the giveaway 📊"
  desc = "There are **" + users$channelID.length + "** participants of the giveaway. And here is a list of them:\n" + list
 
} catch(e) {
  title = "Error!"
  desc = "There isn't any giveaway to fetch a list of participants from in this channel. ❌"
}
$halt $get(title)
