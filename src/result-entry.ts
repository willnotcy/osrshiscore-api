// type result entry
// int rank
// int level
// int xp

export class ResultEntry {
    public rank: number;
    public level: number;
    public xp: number;

    constructor(rank: number, level: number, xp: number) {
        this.rank = rank;
        this.level = level;
        this.xp = xp;
    }
}
