type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type WhoWins<
  t extends RockPaperScissors,
  k extends RockPaperScissors
> = t extends "👊🏻"
  ? k extends "👊🏻"
    ? "draw"
    : k extends "✌🏽"
    ? "lose"
    : k extends "🖐🏾"
    ? "win"
    : never
  : t extends "🖐🏾"
  ? k extends "👊🏻"
    ? "lose"
    : k extends "🖐🏾"
    ? "draw"
    : k extends "✌🏽"
    ? "win"
    : never
  : t extends "✌🏽"
  ? k extends "✌🏽"
    ? "draw"
    : k extends "👊🏻"
    ? "win"
    : k extends "🖐🏾"
    ? "lose"
    : never
  : never;
