type ReverseRecImpl<
  t,
  acc extends string
> = t extends `${infer first}${infer rest}`
  ? ReverseRecImpl<rest, `${first}${acc}`>
  : acc;

type Reverse<t> = t extends `${infer first}${infer rest}`
  ? `${ReverseRecImpl<rest, "">}${first}`
  : t;
