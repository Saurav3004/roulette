export type OutgoingMessages = {
    type: "bet"
}

export enum COINS {
    One,
    Five,
    Ten,
    Fifty,
    OneHundred,
    FiveHundred
}

export type GameState = "people-can-bet" | "people-cant-bet" | "game-over"