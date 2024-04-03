$eval
// This script won't send any message, but it works

try {
  if (joined$channelID.indexOf($ID) == -1) {
    joined$channelID.push($ID)
    users$channelID.push("$namePlain")
  }
  
} catch(e) {
  // Leave this blank...
}
$halt
