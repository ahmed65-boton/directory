const input = document.getElementById("input"); 
const output = document.getElementById("output"); 
input.addEventListener("keydown", function (e) { 
if (e.key === "Enter") { 
const cmd = input.value.trim(); 
output.innerText += "\n> " + cmd; 
if (cmd === "help") { 
output.innerText += "\nCommands: help, defend, purge baldi.exe, reboot"; 
} else if (cmd === "purge baldi.exe") { 
output.innerText += "\n[?] Baldi.exe deleted with terminal energy!"; 
} else if (cmd === "reboot") { 
output.innerText += "\n[??] Rebooting Ahmedcmd Terminal..."; 
} else if (cmd === "defend") { 
output.innerText += "\n[???] Firewall Shield Activated!"; 
} else { 
output.innerText += "\n[ERR] Unknown command: " + cmd; 
} 
input.value = ""; 
} 
}); 
