type ReadonlyDeep<t> = t extends Function
  ? t
  : {
      readonly [k in keyof t]: ReadonlyDeep<t[k]>;
    };

export type SantaListProtector<t> = ReadonlyDeep<t>;
