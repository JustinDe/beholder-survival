import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('Game')
	}

	preload()
    {

    }

    create()
    {
        const map = this.make.tilemap({ key: 'dungeon' })
        const tileset = map.addTilesetImage('dungeon', 'tiles', 16, 16)
        
        map.createLayer('Ground', tileset)
        const wallsLayer = map.createLayer('Walls', tileset)
        const columns = map.createLayer('Columns', tileset)
        const fountains = map.createLayer('Fountains', tileset)
        const door = map.createLayer('Door', tileset)
        
        wallsLayer.setCollisionByProperty({ collides: true })   
        columns.setCollisionByProperty({ collides: true })
        fountains.setCollisionByProperty({ collides: true })
        door.setCollisionByProperty({ collides: true })

        // const debugGraphics = this.add.graphics().setAlpha(0.7)
        // wallsLayer.renderDebug(debugGraphics, {
        //     tileColor: null,
        //     collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
        //     faceColor: new Phaser.Display.Color( 40, 39, 37, 255)
        // })

        // columns.renderDebug(debugGraphics, {
        //     tileColor: null,
        //     collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
        //     faceColor: new Phaser.Display.Color( 40, 39, 37, 255)
        // })

        // door.renderDebug(debugGraphics, {
        //     tileColor: null,
        //     collidingTileColor: new Phaser.Display.Color(234, 20, 48, 255),
        //     faceColor: new Phaser.Display.Color( 40, 39, 37, 255)
        // })

        // fountains.renderDebug(debugGraphics, {
        //     tileColor: null,
        //     collidingTileColor: new Phaser.Display.Color(20, 234, 48, 255),
        //     faceColor: new Phaser.Display.Color( 40, 39, 37, 255)
        // })
        
        const player = this.add.sprite(160, 144, 'player', 'run-down-1.png')
    }
}
