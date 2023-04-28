// priority: 0

console.info('Dust consolidation items & fluids script loaded. -behexxyface')

StartupEvents.registry('item', event => {
	//process via Botania to turn into amethyst shard
	event.create('microcrystal_amethyst').displayName('Microcrystalline Amethyst')
	//transitional item during sequenced assembly
	event.create('amethyst_protocrystals').displayName('Protocrystalline Amethyst')
})

//unimplemented thing I was considering for media generation by upgrading shards to charged at a high botania mana cost
/*StartupEvents.registry('block', event => {
	event.create('cognition_catalyst')
	.displayName('Cognition Catalyst')
})*/

StartupEvents.registry('fluid', event => {
	event.create('liquid_media')
	.displayName('Liquid Media')
	.thickTexture(0xfe62ff)
	.bucketColor(0xdb87f2)
	//no point to loading a flowing texture when the fluid crashes things when placed in-world
	//.flowingTexture('minecraft:block/water_flow')
	.stillTexture('minecraft:block/water_still')
	.noBlock();
})
