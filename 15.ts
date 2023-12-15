type BoxToys<
  t extends string,
  k extends number,
  $acc extends string[] = []
> = k extends $acc["length"] ? $acc : BoxToys<t, k, [t, ...$acc]>;
