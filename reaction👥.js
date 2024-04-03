$eval
// Add "get(desc)" into "description" field

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
  // Leave this blank...
}
$halt $get(title)
