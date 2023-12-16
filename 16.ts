type FindSanta<
  t extends any[][],
  acc extends [any[], any[]] = [[], []]
> = t extends [infer firstArr extends any[], ...infer restArrs extends any[]]
  ? firstArr extends [infer first, ...infer rest]
    ? first extends "🎅🏼"
      ? [acc[0]["length"], acc[1]["length"]]
      : FindSanta<
          [rest, ...restArrs],
          [acc[0], acc[1]["length"] extends 3 ? [] : [first, ...acc[1]]]
        >
    : FindSanta<restArrs, [[firstArr, ...acc[0]], acc[1]]>
  : never;
