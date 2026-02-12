// Help command implementation
// Displays banner and available commands

import { displayBanner } from "../ui/banner.js";
import { formatBlock } from "../ui/formatting.js";

const HELP_TEXT = `Usage: codeproof <command>

Commands:
  init               Initialize CodeProof in a Git repository
  run                Run CodeProof checks
  report@dashboard   Send latest report and show dashboard link
  move-secret        Move high-risk secrets to .env
  ignore             Temporarily disable commit enforcement
  apply              Re-enable commit enforcement
  whoami             Show the local CodeProof client ID
  help               Show this help menu
  -h, --help         Show this help menu

Examples:
  codeproof init
  codeproof run
  codeproof move-secret --yes
  codeproof help
`;

/**
 * Display help information with banner
 */
export async function runHelp() {
  displayBanner();
  formatBlock(HELP_TEXT);
  process.exit(0);
}
