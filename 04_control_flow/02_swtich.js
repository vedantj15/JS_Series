// Basic switch statement structure
// The switch statement evaluates the expression in the parentheses (in this case, `month`).
// It then matches it against the cases, executing the first matching case and breaking out of the switch.

const month = "march";

// Switch statement for determining the month
switch (month) {
    case "jan": // Checks if month is "jan"
        console.log("January");
        break; // Exits the switch after this case is executed

    case "feb": // Checks if month is "feb"
        console.log("feb");
        break; // Exits the switch after this case is executed

    case "march": // Checks if month is "march"
        console.log("march"); // Output: march
        break; // Exits the switch after this case is executed

    case "april": // Checks if month is "april"
        console.log("april");
        break; // Exits the switch after this case is executed

    // If none of the cases match, the default block is executed
    default:
        console.log("default case match"); // Output: (not reached, as case "march" is matched and breaks out)
        break; // Exits the switch after this case is executed
}
