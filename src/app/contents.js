// Components
import MineSweeper from '../4-minesweeper/Minesweeper';
import Zipper from '../5-zipper/Zipper';

// Tags
const vanilla = "Only Vanilla Javascript";
const react = "React";
const ui = "UI / UX / Design";
const tdd = "TDD / BDD";
const vim = "Vim";
const game = "Game";
const animation = "Animation";

const contents = [
    {
        title: "Accordion",
        day: 1,
        tags: [vanilla, ui, tdd, vim]
    },
    {
        title: "CreateElements",
        day: 2,
        tags: [vanilla, tdd, vim]
    },
    {
        title: "Jezzball",
        day: 3,
        tags: [vim, tdd, vanilla, game, animation]
    },
    {
        title: "Minesweeper",
        day: 4,
        component: MineSweeper,
        tags: [tdd, react, game]
    },
    {
        title: "Zipper",
        day: 5,
        component: Zipper,
        tags: [react, animation]
    },
]
export default contents;