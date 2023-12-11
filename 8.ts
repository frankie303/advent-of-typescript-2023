type RemoveNaughtyChildren<t> = Omit<t, `naughty_${string}`>;
