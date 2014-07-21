# Disable terminal control flow (Ctrl-S/Ctrl-Q nonsense)
stty -ixon

stty werase undef
bind '\C-w:unix-filename-rubout'
