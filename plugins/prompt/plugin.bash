# Main prompt line
PS1="${PSTARTLINE}${PFG[245]}\$(hostname -s)${PRESET}"
PS1="${PS1}${PFG[234]}:${PFG[136]}\$(__prompt_curdir)${PRESET}"
PS1="${PS1}${PFG[64]}\$(__git_prompt)${PRESET}"
PS1="${PS1}
${PFG[240]}\$USER${PFG[33]}⨠ ${PRESET}"

# Prompt to display at beginning of next line when command spans multiple lines
PS2="${PFG[33]}↳${PRESET} "

# Debug line prefix
PS4="→ `[ "$0" != -bash ] && echo ${FG[64]}$0:${FG[33]}$LINENO || echo` ${RESET}"

# Bash uses a variable to specify commands to run before a prompt is rendered
export PROMPT_COMMAND="precmd"
