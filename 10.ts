type StreetSuffixTester<
  street extends string,
  suffix extends string,
  acc extends boolean = false
> = street extends `${infer head} ${infer tail}`
  ? tail extends suffix
    ? true
    : StreetSuffixTester<tail, suffix, acc>
  : acc;
