namespace SpriteKind {
    export const plant1 = SpriteKind.create()
    export const plant2 = SpriteKind.create()
    export const water = SpriteKind.create()
    export const animal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.plant2, function (sprite, otherSprite) {
    game.showLongText("Ouch! You ran in to a cactus! Cacti, along with other succulents are one of, if not the most abundant plants in the desert. They have a number of adaptations to make them suitable for the desert, including having wider roots and spines for leaves to reduce water loss.", DialogLayout.Bottom)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.plant1, function (sprite, otherSprite) {
    game.showLongText("Ouch! You ran in to a cactus! Cacti, along with other succulents are one of, if not the most abundant plants in the desert. They have a number of adaptations to make them suitable for the desert, including having wider roots and spines for leaves to reduce water loss.", DialogLayout.Bottom)
    game.gameOver(false)
})
function uptadeBlocks () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Plant1 = sprites.create(P1I, SpriteKind.plant1)
        tiles.placeOnTile(Plant1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
        Plant2 = sprites.create(P2I, SpriteKind.plant2)
        tiles.placeOnTile(Plant2, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile1`)) {
        Water = sprites.create(WI, SpriteKind.water)
        tiles.placeOnTile(Water, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile4`)) {
        Animal = sprites.create(AI, SpriteKind.animal)
        tiles.placeOnTile(Animal, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dino.vy == 0) {
        Dino.vy += -120
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.water, function (sprite, otherSprite) {
    game.showLongText("Watch your step! You fell into an oasis! Oases are the only form of freshwater in the desert, and it can support plant life like palm trees and shrubs. They are also the basis of nomadic settlements.", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.animal, function (sprite, otherSprite) {
    game.showLongText("Oh no, you ran into a camel! Camels are one of the most abundant desert animals, along with reptiles like lizards. They have developed adaptations to live in the desert, such as having clear eyelids to keep sand out of their eyes and storing fat in their humps so they can go a long time without food.", DialogLayout.Bottom)
    game.gameOver(false)
})
let Animal: Sprite = null
let Water: Sprite = null
let Plant2: Sprite = null
let Plant1: Sprite = null
let Dino: Sprite = null
let AI: Image = null
let WI: Image = null
let P2I: Image = null
let P1I: Image = null
P1I = image.create(16, 16)
P2I = P1I.clone()
WI = P1I.clone()
AI = P1I.clone()
P1I = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 6 7 7 . . . . . . . 
    . . . . . . 7 7 7 . 7 6 . . . . 
    . . . . . . 7 7 6 . 7 7 . . . . 
    . . . . . . 6 7 7 7 7 7 . . . . 
    . . . . . . 7 7 7 7 6 7 . . . . 
    . . . 6 7 . 7 7 7 . . . . . . . 
    . . . 7 7 . 6 7 7 . . . . . . . 
    . . . 7 6 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . . . . . 7 7 6 . . . . . . . 
    `
P2I = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 . . . . . . . . . . . . 
    . . 7 6 . 7 . . . . . . 6 7 . . 
    . . 7 7 7 6 . 6 7 . . . 7 7 . . 
    6 . 7 7 . . . 7 7 . . . 7 7 . . 
    7 7 6 7 . . . 6 7 . 6 . 7 6 . . 
    . . 7 7 . 7 . 7 7 7 7 . 7 7 . 7 
    . . 7 7 . 6 7 7 7 . . . 7 7 7 6 
    . . 7 6 . . . 7 6 . . . 6 7 . . 
    `
WI = img`
    .....6888888888.....
    ..8668886688888868..
    88688888886668888688
    88888888888888888868
    88888888888888888886
    88888888886668888888
    88888866668888888888
    48886688888888888884
    44448888888888888444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    44444444444444444444
    `
AI = img`
    . . . . . . . . . . f f f f . . 
    . . . . . . . . . f 4 4 4 4 f . 
    . . . . . . . . . f 4 4 f 4 4 f 
    . . . . f . . . . f 4 4 4 4 4 f 
    . . . f 4 f . . . f 4 4 4 f f . 
    . . f 4 4 4 f . f 4 4 f f . . . 
    . f 4 4 4 4 4 f 4 4 4 f . . . . 
    f 4 4 4 4 4 4 4 4 4 4 f . . . . 
    f 4 4 4 4 4 4 4 4 4 4 f . . . . 
    f 4 4 4 4 4 4 4 4 4 4 f . . . . 
    f 4 4 4 4 4 4 4 4 f f . . . . . 
    . f 4 4 f f 4 4 f . . . . . . . 
    . f 4 f . . f 4 f . . . . . . . 
    . f 4 f . . f 4 f . . . . . . . 
    . f 4 f . . f 4 f . . . . . . . 
    . f f f . . f f f . . . . . . . 
    `
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955599999999999999999999999999555555555555599999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999999999999999995555555555555559999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555559999999999999955555555555555555999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999999955555555555555555999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955599999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555559999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555999999999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999999999999999555555555555555555599999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555559999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555599999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955599999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955599999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955599999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955599999999999999999999999999959999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955599999999999999999999995999999959999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995599999999999999999999999995999999959999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999959999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999959999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999959999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999959999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999995999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999995999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999995999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999995999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999999995999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999999995999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999599999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
Dino = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f 7 7 7 f f . . . . 
    . . . . . . f 7 7 f 7 7 f . . . 
    . . . . . . f 7 7 7 7 7 7 f . . 
    . . . . . . f 7 7 7 7 7 f f . . 
    . . . . . . f 7 7 f f f . . . . 
    . . . . . . f 7 7 f . . . . . . 
    . . . . . f 7 7 7 f . . . . . . 
    . . . f f 7 7 7 7 f . . . . . . 
    . f f 7 7 7 7 7 7 f . . . . . . 
    f 7 7 7 7 7 7 7 7 f . . . . . . 
    . f f 7 7 7 7 7 f . . . . . . . 
    . . . f f f f f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f f . f f . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Dino)
tiles.placeOnRandomTile(Dino, assets.tile`myTile6`)
uptadeBlocks()
pause(1000)
Dino.ay = 350
Dino.vx = 100
