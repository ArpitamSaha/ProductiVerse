const fs = require("fs");

const filePath = "C:/Windows/System32/drivers/etc/hosts";
const redirectPath = "127.0.0.1";
let websites = [
  "www.someRandomWebsite.com",
  "anotherWebsite.com",
  "www.facebook.com",
  "www.youtube.com",
];
let delay = 10000;

let blocker = () => {
  let date = new Date();
  let hours = date.getHours();
  if (hours >= 14 && hours < 18) {
    console.log("Time to block websites");
    fs.readFile(filePath, (err, data) => {
      let fileContents = data.toString();
      for (let i = 0; i < websites.length; i++) {
        let addWebsite = "\n" + redirectPath + " " + websites[i];
        if (fileContents.indexOf(addWebsite) < 0) {
          console.log("Website not present in hosts file");
          fs.appendFile(filePath, addWebsite, (err) => {
            if (err) return console.log(err);
            console.log("File Updated Successfully");
          });
        } else console.log("Website is present");
      }
    });
  } else console.log("Time to unblock websites");
  {
    let completeContent = "";
    fs.readFileSync(filePath)
      .toString()
      .split()
      .forEach((line) => {
        // Replace the file contents by `completeContent` variable
        fs.writeFile(filePath, completeContent, (err) => {
          if (err) return console.log("Error!", err);
        });
        let flag = 1;
        for (let i = 0; i < websites.length; i++) {
          if (line.indexOf(websites[i]) >= 0) {
            flag = 0;
            break;
          }
        }
        if (flag === 1) {
          if (line === "") completeContent += line;
          else completeContent += line + "\n";
        }
      });
  }
};

blocker();
setInterval(blocker, delay);
