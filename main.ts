sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    pause(100)
    info.changeScoreBy(1)
    BENSON.setPosition(randint(0, 100), randint(0, 100))
    music.setVolume(50)
    music.baDing.playUntilDone()
})
let BENSON: Sprite = null
let Mordecai = sprites.create(img`
    ................................
    ........f.......................
    ........ff......................
    ........f9f.....................
    ........f99f....................
    ........f999f...................
    ........f9999f..................
    ...fff..f99999ff................
    ...f99f.f9999999f...............
    ...f99f.f99999999f..............
    ...f999ff999999999f.............
    ...f9999f9999999999f............
    ...f99999999ffff999ffff.........
    ..f99999999f1111f9f1111f........
    .f99999999f111111f111111f.......
    f9999999fff1111f1f1111f1f.......
    ff9999ff111f1111fff1111f........
    f8fffff11111ffff888ffff.........
    f88888f111111ffffffffffffff.....
    f88888f11111fddddddddddddddf....
    f88888f1111fdddffffffffffff.....
    f888888f111fddddddddddf.........
    f88888f11111fffffffffff.........
    f88888f1111111111f..............
    .f8888f1111111111f..............
    ..f88f11111111111f..............
    ...ff11111111111f...............
    .....fffffffffff................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
BENSON = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    .........ffffffff...............
    ........ff1111111ff.............
    .......f11111111111f............
    ......f111111111111ff...........
    .....f11111111111111ff..........
    .....f111ffff11ffff11ff.........
    ....f1111f11f11f11f111f.........
    ...f11111f1ff11f1ff111ff........
    ...f11111ffff11ffff1111ff.......
    ...f221111111fff11111122f.......
    ...f222211111feef1111222f.......
    ...f2222211111feef122222f.......
    ...f2222222211ffff222222f.......
    ....f2222222222222222222f.......
    .....f22222222222222222ff.......
    .....f2222222222222222ff........
    ......f222222222222222f.........
    .......ff2222222222222f.........
    .........ff222222222fff.........
    ...........f2222222ff...........
    ............fffffff.............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Food)
Mordecai.setPosition(15, 102)
BENSON.setPosition(15, 9)
controller.moveSprite(Mordecai)
info.startCountdown(20)
info.setScore(0)
