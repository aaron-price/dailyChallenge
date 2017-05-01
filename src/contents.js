// Components
import MineSweeper from './4-minesweeper/Minesweeper'
import Zipper from './5-zipper/Zipper'
import Hovers from './6-hovers/Hovers'
import Menus from './7-menus/Menus'
import Gears from './8-gears/Gears'

// Tags
const vanilla = "Only Vanilla Javascript"
const react = "React"
const ui = "UI / UX / Design"
const tdd = "TDD / BDD"
const vim = "Vim"
const game = "Game"
const animation = "Animation"
const sass = "SASS / SCSS"
const svg = "SVG"
const buttons = "Buttons"
const hover = "Hover Effect"
const redux = "Redux"

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
        tags: [vim, tdd, vanilla, game, animation, svg]
    },
    {
        title: "Minesweeper",
        day: 4,
        component: MineSweeper,
        tags: [tdd, react, game, svg]
    },
    {
        title: "Zipper",
        day: 5,
        component: Zipper,
        tags: [react, animation, svg]
    },
    {
        title: "Hovers",
        day: 6,
        component: Hovers,
        tags: [react, animation, ui, sass, buttons, hover]
    },
    {
        title: "Menu colour settings",
        day: 7,
        component: Menus,
        tags: [react, redux]
    },
    {
        title: "Gears",
        day: 8,
        component: Gears,
        tags: [react, animation, svg]
    },
]
export default contents