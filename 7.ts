type AppendGood<t> = {
  [k in keyof t as `good_${k & string}`]: t[k];
};
