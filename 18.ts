type Count<
  t extends string[],
  k extends string,
  acc extends any[] = []
> = t extends [infer first, ...infer rest extends string[]]
  ? first extends k
    ? Count<rest, k, [first, ...acc]>
    : Count<rest, k, [...acc]>
  : acc["length"];
