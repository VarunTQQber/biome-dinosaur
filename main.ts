namespace SpriteKind {
    export const plant1 = SpriteKind.create()
    export const plant2 = SpriteKind.create()
    export const water = SpriteKind.create()
    export const animal = SpriteKind.create()
}
function uptadeBlocks () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Plant1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 6 7 7 . . . . . . . 
            . . . . . . 7 7 7 . 7 7 . . . . 
            . . . . . . 7 7 6 . 7 6 . . . . 
            . . . . . . 7 7 7 . 7 7 . . . . 
            . . . 6 7 . 6 7 7 7 6 7 . . . . 
            . . . 7 7 . 7 7 7 7 7 7 . . . . 
            . . . 7 6 . 7 7 7 . . . . . . . 
            . . . 7 7 7 7 7 6 . . . . . . . 
            . . . 6 7 6 7 7 7 . . . . . . . 
            . . . . . . 6 7 7 . . . . . . . 
            `, SpriteKind.plant1)
        tiles.placeOnTile(Plant1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Plant2 = sprites.create(img`
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
            `, SpriteKind.plant2)
        tiles.placeOnTile(Plant2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        Water = sprites.create(img`
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
            `, SpriteKind.water)
        tiles.placeOnTile(Water, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        Animal = sprites.create(img`
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
            `, SpriteKind.animal)
        tiles.placeOnTile(Animal, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
/**
 * sprites.onOverlap(SpriteKind.Player, SpriteKind.plant1, function (sprite, otherSprite) {
 */
/**
 * game.showLongText("Ouch! You ran in to a cactus! Cacti, along with other succulents are one of, if not the most abundant plants in the desert. They have a number of adaptations to make them suitable for the desert, including having wider roots and spines for leaves to reduce water loss.", DialogLayout.Bottom)
 */
/**
 * })
 */
let Animal: Sprite = null
let Water: Sprite = null
let Plant2: Sprite = null
let Plant1: Sprite = null
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
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444499999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444449999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444999999999999999999999999999999999999999999
    9999999999994444444444444444444444449999999999999999999999999999999999999999999999999999999999444444444444444444444444444499999999999999999999999999999999994449
    4444444444444444444444444444444444444444444999999999999999999999999999999999999999999999999944444444444444444444444444444444499999999999999999999999999999444444
    4444444444444444444444444444444444444444444444444499999999999999999999999999999999999999944444444444444444444444444444444444444449994499999999999999999444444444
    4444444444444444444444444444444444444444444444444444444499999999999999999999999999999444444444444444444444444444444444444444444444444444499999999999944444444444
    4444444444444444444444444444444444444444444444444444444444444449999999999999999994444444444444444444444444444444444444444444444444444444444449999994444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444999999444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `)
let Dino = sprites.create(img`
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
