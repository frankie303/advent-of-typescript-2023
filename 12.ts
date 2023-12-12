type FindSanta<t extends any[], acc extends any[] = []> = t extends [
  infer head,
  ...infer tail
]
  ? head extends "🎅🏼"
    ? acc["length"]
    : FindSanta<tail, [head, ...acc]>
  : never;
