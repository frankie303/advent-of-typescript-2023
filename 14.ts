type DecipherNaughtyList<t extends string> =
  t extends `${infer head}/${infer tail}`
    ? [head, DecipherNaughtyList<tail>][number]
    : t;
