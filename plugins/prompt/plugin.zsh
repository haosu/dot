# % escapes expanded in prompts
setopt prompt_percent

# Allow $ expansion in prompts
setopt prompt_subst

# Hostname
PS1="${PSTARTLINE}${PFG[245]}%m${PRESET}"
# working dir
PS1="${PS1}${PFG[234]}:${PFG[136]}%~${PRESET}"
PS1="${PS1}${PFG[64]}\$(__git_prompt)${PRESET}"
# username
PS1="${PS1}
${PFG[240]}%n${PFG[33]}⨠ ${PRESET}"

# Prompt to display at beginning of next line when command spans multiple lines
PS2="${PFG[33]}↳${PRESET} "

# Debug line prefix
PS4="→ `[ "$0" != -bash ] && echo ${FG[64]}$0:${FG[33]}$LINENO || echo` ${RESET}"

RPROMPT='%*'