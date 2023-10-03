const terminalOutput = document.getElementById("output");
const commandInput = document.getElementById("commandInput");
const help = [
    `CLEAR---------Clears the screen.`,
    `HELP----------Provides Help information for Terminal commands.`,
    `VERSION-------Provides Help information for Terminal commands.`,
];

function writeToTerminal(message) {
    const newLine = document.createElement("div");
    newLine.textContent = message;
    terminalOutput.appendChild(newLine);
}

function handleCommand(command) {
    writeToTerminal(`> ${command}`);

    if (command.toLowerCase() === "clear") {
        terminalOutput.innerHTML = "";
    } else if (command.toLowerCase() === "") {
        writeToTerminal(
            'Enter a command or type "clear" to clear the terminal.'
        );
    } else if (command.toLowerCase() === "version") {
        writeToTerminal("Terminal [Version 0.0.0210.2023]");
    } else if (command.toLowerCase() === "terminal") {
        writeToTerminal(
            "Terminal [Version 0.0.0210.2023]\n(c) Skrewde Corporation. All rights reserved."
        );
    } else if (command.toLowerCase() === "help") {
        j = help.length;

        for (i = 0; i < j; i++) {
            writeToTerminal(help[i]);
        }
    } else {
        writeToTerminal(
            `'${command}' is not recognized as a command. Type "clear" to clear the terminal.`
        );
    }

    commandInput.value = "";
}

commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const command = commandInput.value.trim();
        handleCommand(command);
    }
});

// JS for hiding scrollbars
document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.innerHTML = `
        /* Hide scrollbars */
        #terminal::-webkit-scrollbar {
            width: 0 !important;
        }
        #terminal {
            scrollbar-width: none !important;
        }
    `;
    document.head.appendChild(style);
});
