const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50955433623";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "242065136857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_47_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZMmVQWWRZeEhKUjlrN3FvMXFTQXNLOW9BTnArY28rYURxaUVCOUhkS3U4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0MjA2NTEzNjg1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5NzkwQzJBOTU4QjkyMjgzMjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMDA4MDM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtRVm01LUhZUXIyUlEtc0NJbVZpN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWVhZjhkZWYtZGM2Zi00YzU5LTg5MjAtZDQ4MGExNWRkZGVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDIwLFxuICAgICAgMTU0LFxuICAgICAgMjI4LFxuICAgICAgMTk5LFxuICAgICAgNDMsXG4gICAgICAyNDksXG4gICAgICA1NixcbiAgICAgIDIzOSxcbiAgICAgIDE2MixcbiAgICAgIDIzLFxuICAgICAgNDQsXG4gICAgICAxMzcsXG4gICAgICAxMjQsXG4gICAgICAzNSxcbiAgICAgIDIxMCxcbiAgICAgIDI4LFxuICAgICAgNDEsXG4gICAgICAxNDAsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMzIsXG4gICAgICAxMTIsXG4gICAgICA2LFxuICAgICAgMTgsXG4gICAgICAyNyxcbiAgICAgIDE1OSxcbiAgICAgIDk1LFxuICAgICAgMTQwLFxuICAgICAgMTUxLFxuICAgICAgOTgsXG4gICAgICAyNTUsXG4gICAgICAxOTUsXG4gICAgICAxMzksXG4gICAgICAxNjAsXG4gICAgICA2OSxcbiAgICAgIDIyMCxcbiAgICAgIDIwMixcbiAgICAgIDcyLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFaNkpBQkQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDIwNjUxMzY4NTc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIjE4IG1lbm5haiBlcGnigJltIEPDiUxJQkFUXCIsXG4gICAgXCJsaWRcIjogXCI2MTQ1NzIwNzE0ODU4Nzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0syMHhjTUpFTituOTdnR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidWs0WU1CZWptaUtQVTRzVEJvUTBGTmFWQXRrOFlyQ0lvWTVVRVZqbzZnST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkblZwWWdTb1JvdDBuQkU0Q1loT2dkd0VXQVlLM3NiT0F1MnI0UFZBQmFXQUlPcnZ0djBBLzFaQ0xUVStnbUlqU2Y1dllqY2J5SFlXNEJyeGxRaXJoZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLUXl4cGFta0twUHYram5ieDNEVmQxQmV1WHk4RzdhR0VML2Nxekx6T3NjbkY5RUJlT2VHRmZYcHF1aG9mT093d0JROVdQcE0vZ1ZBUyt4VFpyK2JnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDIwNjUxMzY4NTc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAwMDgwMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEK0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQrRS5qc29uIjogIntcImtleURhdGFcIjpcImtuWTJBR1FZNkNqMk1TRkQvUmw0Wm03VDZwTmpPeHA1NUVOZDhVVWhsN3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU1NzU2NTQ4NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMywxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAwMDI0OTk1NTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "´",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🧞‍♂️🌹𑁍✞𝑮𝑶𝑫✰𝑶𝑩𝑰𝑻𝑶✞𑁍🌹🧞‍♂️",
  packname: process.env.PACK_NAME || "🧞‍♂️🌹𑁍✞𝑮𝑶𝑫✰𝑶𝑩𝑰𝑻𝑶✞𑁍🌹🧞‍♂️",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "🧞‍♂️🌹𑁍✞𝑮𝑶𝑫✰𝑶𝑩𝑰𝑻𝑶✞𑁍🌹🧞‍♂️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
