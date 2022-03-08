import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene
{
	constructor()
	{
		super('PreLoader')
	}

	preload()
    {
        this.load.image('tiles', 'tiles/0x72_DungeonTilesetII_v1.3.png')
        this.load.tilemapTiledJSON('dungeon', 'tiles/dungeon-01.json')
        this.load.atlas('player', 'player/fauna.png', 'player/fauna.json')
    }

    create()
    {
        this.scene.start('Game')
    }
}
