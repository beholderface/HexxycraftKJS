// priority: 0

console.info('Loaded dust consolidation recipe script. -behexxyface')

ServerEvents.recipes(event => {
	event.recipes.createSequencedAssembly([ 
	'kubejs:microcrystal_amethyst' 
	], 
	'hexcasting:amethyst_dust', [
	event.recipes.createFilling('kubejs:amethyst_protocrystals', ['kubejs:amethyst_protocrystals', Fluid.of('kubejs:liquid_media',8100)]),
	event.recipes.createDeploying('kubejs:amethyst_protocrystals', ['kubejs:amethyst_protocrystals', '#hexcasting:staves']).keepHeldItem(),
	event.recipes.createPressing('kubejs:amethyst_protocrystals', 'kubejs:amethyst_protocrystals')
]).transitionalItem('kubejs:amethyst_protocrystals').loops(4)

	event.recipes.create.mixing([Fluid.of('kubejs:liquid_media', 100)], ['hexcasting:amethyst_dust']).heated()
	event.recipes.create.mixing([Fluid.of('kubejs:liquid_media', 500)], ['hexcasting:amethyst_dust']).heated()
	event.recipes.create.mixing([Fluid.of('kubejs:liquid_media', 1000)], ['hexcasting:charged_amethyst']).heated()
	
	event.custom(
		{
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "kubejs:microcrystal_amethyst"
  },
  "mana": 100,
  "output": {
    "item": "minecraft:amethyst_shard"
  }
}
	)
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ServerEvents.tags('fluid', event => {
	event.get('create:bottomless/allow').add('kubejs:liquid_media')
})
