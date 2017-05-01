import { fromJS } from "immutable"
// Components
import MineSweeper from "./4-minesweeper/Minesweeper"
import Zipper from "./5-zipper/Zipper"
import Hovers from "./6-hovers/Hovers"
import Menus from "./7-menus/Menus"
import Gears from "./8-gears/Gears"
import FilterSettings from "./9-filterSettings/FilterSettings"

// Tags
export const tags = fromJS({
    animation   : "Animation",
    buttons     : "Buttons",
    game        : "Game",
    hover       : "Hover Effect",
    react       : "React",
    redux       : "Redux",
    sass        : "SASS / SCSS",
    svg         : "SVG",
    tdd         : "TDD / BDD",
    ui          : "UI / UX / Design",
    vim         : "Vim",
    vanilla     : "Only Vanilla Javascript",
})

const contents = fromJS([
    {
        title: "Accordion",
        day: 1,
        tags: [tags.get("tdd"),tags.get("ui"),tags.get("vanilla"),tags.get("vim")],
    },
    {
        title: "CreateElements",
        day: 2,
        tags: [tags.get("tdd"),tags.get("vanilla"),tags.get("vim")],
    },
    {
        title: "Jezzball",
        day: 3,
        tags: [tags.get("animation"),tags.get("game"),tags.get("svg"),tags.get("tdd"),tags.get("vanilla"),tags.get("vim")],
    },
    {
        title: "Minesweeper",
        day: 4,
        component: MineSweeper,
        tags: [tags.get("game"),tags.get("react"),tags.get("svg"),tags.get("tdd")],
    },
    {
        title: "Zipper",
        day: 5,
        component: Zipper,
        tags: [tags.get("animation"),tags.get("react"),tags.get("svg")],
    },
    {
        title: "Hovers",
        day: 6,
        component: Hovers,
        tags: [tags.get("animation"),tags.get("buttons"),tags.get("hover"),tags.get("react"),tags.get("sass"),tags.get("ui")],
    },
    {
        title: "Menu colour settings",
        day: 7,
        component: Menus,
        tags: [tags.get("react"), tags.get("redux")],
    },
    {
        title: "Gears",
        day: 8,
        component: Gears,
        tags: [tags.get("animation"), tags.get("react"), tags.get("svg")],
    },
    {
        title: "Filter Settings",
        day: 9,
        component: FilterSettings,
        tags: [tags.get("react"), tags.get("redux")],
    },
])
export default contents