export default class mapa extends Phaser.Scene {
  constructor () {
    super('mapa')
  }

  preload () {
    this.load.audio('mapa', './assets/mapa.mp3')

    this.load.tilemapTiledJSON('mapa', './assets/mapa/mapa.json')

    this.load.image('blocos', './assets/mapa/blocos.png')
    this.load.image('grama', './assets/mapa/grama.png')
    this.load.image('itens', './assets/mapa/itens.png')
    this.load.image('paredes', './assets/mapa/paredes.png')
    this.load.image('pedras', './assets/mapa/pedras.png')
    this.load.image('personagem', './assets/mapa/personagem.png')
    this.load.image('plantas', './assets/mapa/plantas.png')
    this.load.image('sombras-plantas', './assets/mapa/sombras-plantas.png')
    this.load.image('sombras', './assets/mapa/sombras.png')

    this.load.spritesheet('coruja-cinza', './assets/coruja-cinza.png', { frameWidth: 64, frameHeight: 64 })
  }

  create () {
    this.sound.add('mapa', { loop: true }).play()

    this.tilemapMapa = this.make.tilemap({ key: 'mapa' })

    this.tilesetBlocos = this.tilemapMapa.addTilesetImage('blocos')
    this.tilesetGrama = this.tilemapMapa.addTilesetImage('grama')
    this.tilesetItens = this.tilemapMapa.addTilesetImage('itens')
    this.tilesetParedes = this.tilemapMapa.addTilesetImage('paredes')
    this.tilesetPedras = this.tilemapMapa.addTilesetImage('pedras')
    this.tilesetPersonagem = this.tilemapMapa.addTilesetImage('personagem')
    this.tilesetPlantas = this.tilemapMapa.addTilesetImage('plantas')
    this.tilesetSombrasPlantas = this.tilemapMapa.addTilesetImage('sombras-plantas')
    this.tilesetSombras = this.tilemapMapa.addTilesetImage('sombras')

    this.layerTerreno = this.tilemapMapa.createLayer('terreno', [this.tilesetGrama])
    this.layerSombras = this.tilemapMapa.createLayer('sombras', [this.tilesetSombrasPlantas, this.tilesetSombras])
    this.layerPlantas = this.tilemapMapa.createLayer('plantas', [this.tilesetPlantas])
    this.layerItens = this.tilemapMapa.createLayer('itens', [this.tilesetItens])

    this.personagem = this.physics.add.sprite(400, 225, 'coruja-cinza')

    this.layerParedes = this.tilemapMapa.createLayer('paredes', [this.tilesetBlocos, this.tilesetParedes])

    this.anims.create({
      key: 'coruja-cinza-parada',
      frames: this.anims.generateFrameNumbers('coruja-cinza', { start: 0, end: 1 }),
      frameRate: 1,
      repeat: -1
    })

    this.anims.create({
      key: 'coruja-cinza-voando-esquerda',
      frames: this.anims.generateFrameNumbers('coruja-cinza', { start: 2, end: 5 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'coruja-cinza-voando-direita',
      frames: this.anims.generateFrameNumbers('coruja-cinza', { start: 6, end: 9 }),
      frameRate: 10,
      repeat: -1
    })

    this.personagem
      .setInteractive()
      .on('pointerdown', () => {
        this.personagem.anims.play('coruja-cinza-voando-direita')
        this.personagem.setVelocityX(50)
      })

    this.cameras.main.startFollow(this.personagem)
  }

  update () {
  }
}
